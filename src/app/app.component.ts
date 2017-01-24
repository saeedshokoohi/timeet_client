import { Component,ChangeDetectorRef,ChangeDetectionStrategy,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { views } from './app-nav-views';
import { MOBILE } from './services/constants';
import {CompanyVM} from "./models/CompanyVM.model";
import {CompanyService} from "./services/company-service/company-service";
import {CombineAllSignature} from "../../node_modules/rxjs/src/operator/combineAll";
import {TranslateService} from "../../node_modules/ng2-translate/src/translate.service";
import {OnInit} from "../../node_modules/@angular/core/src/metadata/lifecycle_hooks";

import { Modal } from 'angular2-modal/plugins/bootstrap';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {LoginFormComponent} from "./features/login/login.component";
import {UserVM} from "./models/UserVM";
import {AuthService} from "./services/auth/AuthService";


@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CompanyService],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public company:CompanyVM
  showMonitor = (ENV === 'development' && !AOT &&
    ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
  );
  mobile = MOBILE;
  sideNavMode = MOBILE ? 'over' : 'side';
  views = views;
  private baseurl;
  private userName:string;
  private password:string;
  private account:UserVM=new UserVM();
  private isAuthenticated;

  constructor(
    public ref:ChangeDetectorRef,
    public route: ActivatedRoute,
    public router: Router,
    public translate: TranslateService,
    private companyService:CompanyService,
    private authService:AuthService,
    overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal
  ) {
    overlay.defaultViewContainer = vcRef;
    this.company=new CompanyVM('');
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

  }

  ngOnInit() {

    let parent=this;
    this.authService.Account().subscribe((account)=>this.account=account);
    this.checkAuthenticated();
    this.router.events.subscribe((r)=>{
      parent.checkAuthenticated();
    });


  }

  activateEvent(event) {
debugger;
    if(event.route)
    {
      event.route.params.subscribe(params => {
        debugger;
        this.baseurl = params['baseurl'];
        if(this.baseurl)
        console.log(this.baseurl);
        this.companyService.getCompanyInfo(this.baseurl).subscribe(company=>{

          this.company=company;},error=>{
          console.log(error);});


      });
    }


    if (ENV === 'development') {
      console.log('Activate Event:', event);
    }
  }

  deactivateEvent(event) {
    if (ENV === 'development') {
      console.log('Deactivate Event', event);
    }
  }
  gotoOrderBag()
  {
    this.router.navigateByUrl(this.baseurl+'/orderbag');
  }
  openLoginForm()
  {
    this.router.navigateByUrl(this.baseurl+"/login?backurl="+this.baseurl+'/home');
   // return this.modal.open(LoginFormComponent,  overlayConfigFactory({ userName:'', password: '',accout:this.account,onclose:this.onLoginClosed }, BSModalContext));

  }
  openRegisterForm()
  {
this.router.navigateByUrl(this.baseurl+'/register');
  }

  logout()
  {
    this.authService.logout();
    this.account=new UserVM();
    this.checkAuthenticated();



  }
  checkAuthenticated()
  {
debugger;

    let newIsAuthenticatednew=  this.authService.isLoggedIn();
    if(newIsAuthenticatednew && newIsAuthenticatednew!=this.isAuthenticated) {
      this.authService.Account().subscribe((account)=>this.account = account);

    }
    this.isAuthenticated=newIsAuthenticatednew;
  }


}
