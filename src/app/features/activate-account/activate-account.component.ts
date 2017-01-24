import {ChangeDetectorRef, Component, OnDestroy, OnInit,Input,OnChanges,ChangeDetectionStrategy,ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import {TranslateService} from "../../../../node_modules/ng2-translate/src/translate.service";
import {CompanyService} from "../../services/company-service/company-service";
import {CategoryService} from "../../services/category/category.service";
import {OrderBagService} from "../../services/orderbag/orderbag.service";
import {CacheUtilService} from "../../services/cache-util/CacheUtilService";
import {AuthService} from "../../services/auth/AuthService";
import {UserVM} from "../../models/UserVM";


@Component({
  selector: 'activate-account',
  templateUrl: 'activate-account.component.html',
  styleUrls: ['activate-account.style.css'],
  providers: [CategoryService, CompanyService, OrderBagService, CacheUtilService]

})

export class ActivateAccountComponent implements OnDestroy, OnInit,OnChanges {

  private id;
  private baseurl:string = '';
  private doNotMatch;
  private error;
  private re_error;
  private errorUserExists;
  private success;
  private re_success;
  private errorEmailExists;
  private registerAccount;
  private confirmPassword;
  private login:string;
  private activationCode:string;


  constructor(private ref:ChangeDetectorRef,
              public route:ActivatedRoute,
              public router:Router,
              public translate:TranslateService,
              private companyService:CompanyService,
              private _cacheUtil:CacheUtilService,
              private authService:AuthService,
              private fb:FormBuilder) {


    this.doNotMatch = null;
    this.error = null;
    this.errorUserExists = null;
    this.success = null;
    this.registerAccount = new UserVM();

  }

  activateAccount() {
    let parent = this;

    this.doNotMatch = null;
    this.error = null;
    this.errorUserExists = null;
    this.errorEmailExists = null;

    this.authService.activateAccount(this.login, this.activationCode).then(function () {
      parent.success = 'OK';
      this.router.navigateByUrl(this.baseurl+"/login?backurl="+this.baseurl+'/home');
    }).catch(function (response) {
      parent.success = null;

        parent.error = 'ERROR';

    });
  }
  regenerateActivateCode() {
    let parent = this;

    this.doNotMatch = null;
    this.re_error = null;
    this.errorUserExists = null;
    this.errorEmailExists = null;

    this.authService.regenerateActivationCode(this.login).then(function () {
      parent.re_success = 'OK';

    }).catch(function (response) {
      parent.re_success = null;

      parent.re_error = 'ERROR';

    });
  }


  ngOnDestroy():void {
  }

  ngOnInit():void {
    this.route.params.subscribe((p)=>{
      this.baseurl=p['baseurl'];
      this.login=p['login'];

    })

  }

  ngOnChanges(changes):void {
  }

}
