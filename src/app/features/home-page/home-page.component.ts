import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from "../../../../node_modules/ng2-translate/src/translate.service";
import {CompanyService} from "../../services/company-service/company-service";
import {CompanyVM} from "../../models/CompanyVM.model";


@Component({
  selector: 'home-page-component',
  templateUrl: '../../../assets/themes/default/index.html'
})

export class HomePageComponent implements OnDestroy, OnInit {
  private url ;
  constructor(    public route: ActivatedRoute,
                  public router: Router,
                  public translate: TranslateService,
                  private companyService:CompanyService)
  {}
  ngOnDestroy():void {
  }

  ngOnInit():void {

  }

}
