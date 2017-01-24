/**
 * Created by saeed on 1/12/2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {CacheUtilService} from "../cache-util/CacheUtilService";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {API_URL_LOGIN,API_URL_LOGOUT,API_URL_LOGEDINUSER,API_URL_ACCOUNT,API_URL_REGISTER,API_URL_ACTIVATE_ACCOUNT,API_URL_REGEN_ACTIVATE_CODE} from '../constants';
import {UserVM} from "../../models/UserVM";
import { Subject }    from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

//declare var Auth0Lock: any;


@Injectable()
export class AuthService {
  private accountCachKey = "accountKey";
  private loggedInCachKey = "isLoggedIn";


  constructor(private router:Router, private _cachUtil:CacheUtilService, private _http:Http) {

  }

  /**
   * Do the Log In process
   * @param credentials
   * @returns {any}
     */
  login(credentials) {
    var data = 'j_username=' + encodeURIComponent(credentials.userName) +
      '&j_password=' + encodeURIComponent(credentials.password) +
      '&remember-me=' + credentials.rememberMe + '&submit=Login';

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(API_URL_LOGIN, data, options).toPromise();

  }

  /**
   * do log out
   * tell the server which current user is not log in
   * remove cached flags
   */
  logout() {
    let parent = this;
    // logout from the server
    this._http.post(API_URL_LOGOUT, null).subscribe(function (response) {
    });
    this.setAsLoggedout();

  }

  /**
   * return current user info and store it in cache
   * @returns {any}
   * @constructor
   */
  Account():Observable<UserVM> {
    debugger;
    if (this._cachUtil.exists(this.accountCachKey))
      return Observable.of(this._cachUtil.getFromCach(this.accountCachKey));
    else
    return this._http.get(API_URL_ACCOUNT)
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        this._cachUtil.storeInCache(this.accountCachKey, res.json());
        return res.json();
      });

    //...errors if any
    //.catch((er);

  }

  /**
   * ask the server if current session is loggedin or not
   * @returns {any}
     */
  loggedIn() {
    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //headers.append('SET-COOKIE', 'JSESSIONID=<jsessionid>');
    return this._http.get(API_URL_LOGEDINUSER).toPromise();
  }

  /**
   * register user
   * @param registerAccount
   * @returns {any}
   */
  createAccount(registerAccount:UserVM):any {
    return this._http.post(API_URL_REGISTER, registerAccount).toPromise();
  }

  /**
   * activate user by activation code
   * @param login
   * @param activationCode
   * @returns {any}
   */
  activateAccount(login:String, activationCode:String):any {
    return this._http.get(API_URL_ACTIVATE_ACCOUNT + '/' + login + '/' + activationCode).toPromise();
  }

  /***
   * regenerate the activation code and send it to user
   * @param login
   * @returns {any}
   */
  regenerateActivationCode(login:String):any {
    return this._http.get(API_URL_REGEN_ACTIVATE_CODE + '/' + login).toPromise();
  }


  /**
   * this method check if user is authenticated or not
   * @returns {boolean}
   */
  isLoggedIn() {
    debugger;
    let isLoggeIn = this._cachUtil.getFromCach(this.loggedInCachKey);
    if (isLoggeIn != null && isLoggeIn != undefined) {
      return <boolean>isLoggeIn;
    }
    else {
      this.setAsLoggedout();
      return false;
    }

  }

  /**
   * this method persist the login flog for performance issue
   */
  setAsLoggedIn() {
    //setting the login flag in cache
    this._cachUtil.storeInCache(this.loggedInCachKey, true);
  }

  setAsLoggedout() {
    //setting the loggedIn flag in cache
    this._cachUtil.storeInCache(this.loggedInCachKey, false);
    //removing the user data from cache
    this._cachUtil.removeFromCache(this.accountCachKey);
  }
}

