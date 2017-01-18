/**
 * Created by saeed on 1/12/2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {CacheUtilService} from "../cache-util/CacheUtilService";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {API_URL_LOGIN,API_URL_LOGOUT,API_URL_LOGEDINUSER,API_URL_ACCOUNT} from '../constants';

//declare var Auth0Lock: any;


@Injectable()
export class AuthService {

  authenticated:boolean=false;

  constructor(private router:Router, private _cachUtil:CacheUtilService, private _http:Http) {
  }

  getToken() {
    var token = this._cachUtil.getFromCach('authenticationToken');
    return token;
  }

  hasValidToken() {
    var token = this.getToken();
    return !!token;
  }

  login(credentials) {
    var data = 'j_username=' + encodeURIComponent(credentials.userName) +
      '&j_password=' + encodeURIComponent(credentials.password) +
      '&remember-me=' + credentials.rememberMe + '&submit=Login';

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers});
    return this._http.post(API_URL_LOGIN, data, options).toPromise();

  }
  loggedIn()
  {
    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //headers.append('SET-COOKIE', 'JSESSIONID=<jsessionid>');
    return this._http.get(API_URL_LOGEDINUSER).toPromise();
  }
  isAuthenticated(){

  }
  setAuthenticates(isAuthenticated:boolean)
  {

  }
  logout() {


    let parent = this;
    // logout from the server
    this._http.post(API_URL_LOGOUT, null).subscribe(function (response) {
      parent._cachUtil.removeFromCache('authenticationToken');

      //// to get a new csrf token call the api
      //$http.get('api/account');
      //return response;
    });

  }
   Account () {
  var service = this._http.get(API_URL_ACCOUNT);
  return service;
}

}
