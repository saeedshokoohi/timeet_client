import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {CompanyService} from "../../services/company-service/company-service";
import {LoginContext} from "./LoginContext";
import {AuthService} from "../../services/auth/AuthService";
import {LoginVM} from "../../models/LoginVM";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ActivatedRoute, Router } from '@angular/router';




/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['login.style.css'],

  providers: [CompanyService,AuthService,CookieService]
})
export class LoginFormComponent  {
  context:LoginContext;

  public wrongAnswer:boolean;
  private userName;
  private password;
  private error=null;


  constructor(private authService:AuthService,
              public route: ActivatedRoute,
              public router: Router,
              private _coockieService:CookieService) {

  }


  login() {
    let credential:LoginVM=new LoginVM();
    credential.userName=this.userName;
    credential.password=this.password;
    credential.rememberMe=true;
    let parent=this;
    this.error=null;
    this.authService.login(credential) .then(function(res){
      parent.authService.loggedIn().then((res)=>{parent.doAfterSuccessLogin() });

      console.log(res)})
      .catch(function(err){parent.error='error'; console.log(err)});;

  }

  doAfterSuccessLogin()
  {
    this.route.queryParams.subscribe((p)=>{
      let backurl = p['backurl'];
      this.authService.setAsLoggedIn();
      this.router.navigateByUrl(backurl);
    })

  }
  beforeDismiss():boolean {
    return true;
  }

  beforeClose():boolean {
    return true;
  }
  handleCorrectCaptcha(e)
  {
      console.log(e);
  }
}
