import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {CompanyService} from "../../services/company-service/company-service";
import {LoginContext} from "./LoginContext";
import {AuthService} from "../../services/auth/AuthService";
import {LoginVM} from "../../models/LoginVM";
import { CookieService } from 'angular2-cookie/services/cookies.service';



/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['login.style.css'],
  providers: [CompanyService,AuthService,CookieService]
})
export class LoginFormComponent implements CloseGuard, ModalComponent<LoginContext> {
  context:LoginContext;

  public wrongAnswer:boolean;
  private userName;
  private password;

  constructor(public dialog:DialogRef<LoginContext>,private authService:AuthService,private _coockieService:CookieService) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    //  dialog.setCloseGuard(this);
  }


  login() {
    let credential:LoginVM=new LoginVM();
    credential.userName=this.userName;
    credential.password=this.password;
    credential.rememberMe=true;
    let parent=this;
    this.authService.login(credential) .then(function(res){
      debugger;
      parent.dialog.close();
        parent._coockieService.put("myName","saeed");
        console.log( parent._coockieService.getAll());
      parent.authService.loggedIn().then((res)=>{ console.log('success login'); console.log(res);});

      console.log(res)})
      .catch(function(err){debugger; console.log(err)});;

  }


  beforeDismiss():boolean {
    return true;
  }

  beforeClose():boolean {
    return true;
  }
}
