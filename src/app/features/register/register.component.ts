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
  selector: 'register-form',
  templateUrl: 'register.component.html',
  styleUrls: ['register.style.css'],
  providers: [CategoryService, CompanyService, OrderBagService, CacheUtilService]

})

export class RegisterComponent implements OnDestroy, OnInit,OnChanges {

  private id;
  private baseurl:string = '';
  private doNotMatch  ;
  private error;
  private errorUserExists;
  private success;
  private errorEmailExists;
  private registerAccount;
  private confirmPassword;


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
    this.registerAccount=new UserVM();

  }







  register () {
     let  parent=this;
debugger;
  if (this.registerAccount.password !== this.registerAccount.confirmPassword) {
    this.doNotMatch = 'ERROR';
  } else {

    this.doNotMatch = null;
    this.error = null;
    this.errorUserExists = null;
    this.errorEmailExists = null;

    this.authService.createAccount(this.registerAccount).then(function () {
      parent.success = 'OK';
      parent.router.navigateByUrl(this.baseurl+'/activate/'+parent.registerAccount.login);
    }).catch(function (response) {
      parent.success = null;
      if (response.status === 400 && response._body === 'login already in use') {
        parent.errorUserExists = 'ERROR';
      } else if (response.status === 400 && response._body === 'e-mail address already in use') {
        parent.errorEmailExists = 'ERROR';
      } else {
        parent.error = 'ERROR';
      }
    });
  }
}

  ngOnDestroy():void {
  }

  ngOnInit():void {
    this.route.params.subscribe((p)=>{
      this.baseurl=p['baseurl'];
    })
  }

  ngOnChanges(changes):void {
  }

}
