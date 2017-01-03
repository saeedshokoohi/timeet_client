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
  selector: 'category-detail',
  templateUrl: 'category-detail.component.html',
  providers: [CategoryService, CompanyService]

})

export class CategoryDetailComponent implements OnDestroy, OnInit,OnChanges {
  public test:number = 1000;

  private url;
  public categories:CategoryVM[]=[];
  public serviceItems:ServiceItemVM[]=[];
  public _ref:ChangeDetectorRef;
  private id:number;


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
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.categoryService.getCategoriesByParentId(this.id).subscribe(cats=>{
        this.categories=cats;},error=>{
        console.log(error);});
      this.categoryService.getServiceItemsByCategoryId(this.id).subscribe(items=>{
        this.serviceItems=items;},error=>{
        console.log(error);});
    });



  }

  ngOnChanges(changes):void {



  }
}
