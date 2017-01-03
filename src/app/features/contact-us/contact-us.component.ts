import {ChangeDetectorRef, Component, OnDestroy, OnInit,Input,OnChanges,ChangeDetectionStrategy,ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from "../../../../node_modules/ng2-translate/src/translate.service";
import {CompanyService} from "../../services/company-service/company-service";
import {CompanyVM} from "../../models/CompanyVM.model";
import {CategoryService} from "../../services/category/category.service";
import {CategoryVM} from "../../models/CategoryVM.model";


@Component({
  selector: 'contact-us',
  templateUrl: 'contact-us.component.html',
  providers: [CategoryService, CompanyService]

})

export class ContactUsComponent implements OnDestroy, OnInit,OnChanges {
  public test:number = 1000;

  private url;
  public rootCategories:CategoryVM[]=[];
  public _ref:ChangeDetectorRef;
  @Input('company') company:CompanyVM;
  @Input('baseurl') baseurl:string;

  constructor(
    private ref:ChangeDetectorRef,
              public route:ActivatedRoute,
              public router:Router,
              public translate:TranslateService,
              private companyService:CompanyService,
              private categoryService:CategoryService) {


  }

  ngOnDestroy():void {
  }

  ngOnInit():void {



  }

  ngOnChanges(changes):void {
    var parent=this;
      console.log(this);




  }
}
