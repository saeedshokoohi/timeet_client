import {ChangeDetectorRef, Component, OnDestroy, OnInit,Input,OnChanges,ChangeDetectionStrategy,ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from "../../../../node_modules/ng2-translate/src/translate.service";
import {CompanyService} from "../../services/company-service/company-service";
import {CompanyVM} from "../../models/CompanyVM.model";
import {CategoryService} from "../../services/category/category.service";
import {CategoryVM} from "../../models/CategoryVM.model";
import {ServiceItemVM} from "../../models/ServiceItemVM";
import {ServiceItemDetailVM} from "../../models/ServiceItemDetailVM";
import {SessionDateVM} from "../../models/SessionDateVM.model";
import {SessionTimeVM} from "../../models/SessionTimeVM.model";


@Component({
  selector: 'service-item-detail',
  templateUrl: 'service-item-detail.component.html',
  styleUrls: ['service-item-detail.style.css'],
  providers: [CategoryService, CompanyService]

})

export class ServiceItemDetailComponent implements OnDestroy, OnInit,OnChanges {
  public test:number = 1000;

  private url;
  public serviceItemDetail:ServiceItemDetailVM=new ServiceItemDetailVM();
  private id:number;
  private sessionDates:SessionDateVM[]=[];
  private sessionTimes:SessionTimeVM[]=[];
  private selectedDate:SessionDateVM=new SessionDateVM();
  private selectedTime:SessionTimeVM=new SessionTimeVM();
  private baseurl ;


  constructor(private ref:ChangeDetectorRef,
              public route:ActivatedRoute,
              public router:Router,
              public translate:TranslateService,
              private companyService:CompanyService,
              private categoryService:CategoryService) {
    this.serviceItemDetail = new ServiceItemDetailVM();

  }

  ngOnDestroy():void {
  }

  ngOnInit():void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.baseurl=params['baseurl'];


      this.categoryService.getServiceItemDetailById(this.id).subscribe(sd=> {
        console.log('service detail');
        console.log(sd);
        this.serviceItemDetail = sd;
        this.fillDates(sd);

      }, error=> {
        console.log(error);
      });

    });


  }
   addDays(date, days:number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
   fillDates(serviceItem:ServiceItemVM) {
     let from=new Date();
     let to =new Date();
     to=this.addDays(to,30);


     this.categoryService.getServiceSessionDatesByServiceid(serviceItem.id,from,to).subscribe(sd=> {
       this.sessionDates =sd;

     }, error=> {
       console.log(error);
     });
  }
  fillTimes(serviceItem:ServiceItemVM,date:SessionDateVM) {
    let currentDate:Date;
    let now=new Date();
       currentDate=new Date(date.startDate.toString());
    currentDate.setUTCHours(0,0,0);
    console.log(currentDate);

    this.categoryService.getServiceSessionTimesByServiceid(serviceItem.id,currentDate).subscribe(sd=> {
      this.sessionTimes =sd;
      if(this.sessionTimes.length>0)
      this.selectedTime=this.sessionTimes[0];
      else
      this.selectedTime=null;

    }, error=> {
      console.log(error);
    });
  }
  addtocard()
  {
   if(this.selectedTime && this.selectedTime.id)
    this.router.navigateByUrl(this.baseurl+'/orderbagitem/'+this.serviceItemDetail.id+'/'+this.selectedTime.id);
  }
  selectedDateChanged(e)
  {
    debugger;

    if(this.selectedDate!=undefined && this.selectedDate.startDate!=undefined) {
      this.fillTimes(this.serviceItemDetail,  this.selectedDate);
    }
  }

  ngOnChanges(changes):void {


  }
}
