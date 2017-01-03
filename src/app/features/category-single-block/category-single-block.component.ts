import {ChangeDetectorRef, Component, OnDestroy, OnInit,Input,OnChanges,ChangeDetectionStrategy,ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from "../../../../node_modules/ng2-translate/src/translate.service";
import {CompanyService} from "../../services/company-service/company-service";
import {CompanyVM} from "../../models/CompanyVM.model";
import {CategoryService} from "../../services/category/category.service";
import {CategoryVM} from "../../models/CategoryVM.model";



@Component({
  selector: 'category-single-block',
  templateUrl: 'category-single-block.component.html',
  providers: [CategoryService, CompanyService]

})

export class CategorySingleBlockComponent implements OnDestroy, OnInit,OnChanges {
@Input() category:CategoryVM;
@Input() company:CompanyVM;
  private detailUrl:string;

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
this.detailUrl='/'+this.company.keyUrl+'/categorydetail/'+this.category.id;

  }

  ngOnChanges(changes):void {




  }
}
