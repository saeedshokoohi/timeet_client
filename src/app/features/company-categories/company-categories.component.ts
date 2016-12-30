import { Component, OnDestroy, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from "../../../../node_modules/ng2-translate/src/translate.service";
import {CompanyService} from "../../services/company-service/company-service";
import {CompanyVM} from "../../models/CompanyVM.model";



@Component({
  selector: 'company-categories',
  templateUrl: 'company-categories.component.html'

})

export class CompanyCategoriesComponent implements OnDestroy, OnInit {
  private url;
  @Input('company') company: CompanyVM;
  constructor(public route:ActivatedRoute,
              public router:Router,
              public translate:TranslateService,
              private companyService:CompanyService) {
  }

  ngOnDestroy():void {
  }

  ngOnInit():void {


  }

}
