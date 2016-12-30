/**
 * Created by saeed on 12/29/2016.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {API_URL_COMPANY_BY_KEY_URL} from '../constants';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {CompanyVM} from "../../models/CompanyVM.model";

@Injectable()
export class CompanyService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url

  public getCompanyInfo(keyUrl:string) : Observable<CompanyVM> {

    // ...using get request
    return this.http.get(API_URL_COMPANY_BY_KEY_URL+'?url='+keyUrl)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
