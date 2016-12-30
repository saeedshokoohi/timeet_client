import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { views } from './app-nav-views';
import { MOBILE } from './services/constants';
import {CompanyVM} from "./models/CompanyVM.model";
import {CompanyService} from "./services/company-service/company-service";
import {CombineAllSignature} from "../../node_modules/rxjs/src/operator/combineAll";
import {TranslateService} from "../../node_modules/ng2-translate/src/translate.service";
import {OnInit} from "../../node_modules/@angular/core/src/metadata/lifecycle_hooks";


@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
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

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public translate: TranslateService,
    private companyService:CompanyService
  ) {
    this.company=new CompanyVM('');
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

  }

  ngOnInit() {

  }
  activateEvent(event) {

    if(event.route)
    {
      event.route.params.subscribe(params => {
        debugger;
        this.baseurl = params['baseurl'];


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
}
