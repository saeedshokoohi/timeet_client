import {ChangeDetectorRef, Component, OnDestroy, OnInit,Input,OnChanges,ChangeDetectionStrategy,ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from "../../../../node_modules/ng2-translate/src/translate.service";
import {CompanyService} from "../../services/company-service/company-service";
import {CompanyVM} from "../../models/CompanyVM.model";
import {CategoryService} from "../../services/category/category.service";
import {CategoryVM} from "../../models/CategoryVM.model";
import {ServiceItemVM} from "../../models/ServiceItemVM";


@Component({
  selector: 'service-item-single-block',
  templateUrl: 'service-item-single-block.component.html',
  providers: [CategoryService, CompanyService]

})

export class ServiceItemSingleBlockComponent implements OnDestroy, OnInit,OnChanges {
@Input() serviceItem:ServiceItemVM

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



  }
}
