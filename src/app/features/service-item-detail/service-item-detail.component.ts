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


@Component({
  selector: 'service-item-detail',
  templateUrl: 'service-item-detail.component.html',
  styleUrls:['service-item-detail.style.css'],
  providers: [CategoryService, CompanyService]

})

export class ServiceItemDetailComponent implements OnDestroy, OnInit,OnChanges {
  public test:number = 1000;

  private url;
  public serviceItemDetail:ServiceItemDetailVM;
  private id:number;


  constructor(
    private ref:ChangeDetectorRef,
              public route:ActivatedRoute,
              public router:Router,
              public translate:TranslateService,
              private companyService:CompanyService,
              private categoryService:CategoryService) {
this.serviceItemDetail=new ServiceItemDetailVM();

  }

  ngOnDestroy():void {
  }

  ngOnInit():void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.categoryService.getServiceItemDetailById(this.id).subscribe(sd=>{
        console.log('service detail');
        console.log(sd);
        this.serviceItemDetail=sd;},error=>{
        console.log(error);});

    });



  }

  ngOnChanges(changes):void {



  }
}
