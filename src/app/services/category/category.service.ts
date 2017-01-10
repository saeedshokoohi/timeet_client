/**
 * Created by saeed on 12/29/2016.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {API_URL_ROOT_CATEGORIES_BY_KEY_URL,API_URL_SERVICES_BY_CATEGORY_ID,
  API_URL_CATEGORIES_BY_PARENT_ID,API_URL_SERVICE_DETAIL_BY_SERVICE_ID,
  API_URL_SERVICE_SESSION_DATES_BY_SERVICE_ID,
  API_URL_SERVICE_SESSION_TIMES_BY_SERVICE_ID}  from '../constants';
import {CategoryVM} from "../../models/CategoryVM.model";
import {ServiceItemVM} from "../../models/ServiceItemVM";
import {ServiceItemDetailVM} from "../../models/ServiceItemDetailVM";
import {SessionDateVM} from "../../models/SessionDateVM.model";
import {SessionTimeVM} from "../../models/SessionTimeVM.model";

@Injectable()
export class CategoryService {
  // Resolve HTTP using the constructor
  constructor(private http:Http) {


  }

  // private instance variable to hold base url


  public getRootCategories(keyUrl:string):Observable<CategoryVM[]> {

    // ...using get request

    return this.http.get(API_URL_ROOT_CATEGORIES_BY_KEY_URL + '?url=' + keyUrl)
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        return res.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }

  getCategoriesByParentId(id:Number):Observable<CategoryVM[]> {
    return this.http.get(API_URL_CATEGORIES_BY_PARENT_ID + '/' + id)
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        return res.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getServiceItemsByCategoryId(id:Number):Observable<ServiceItemVM[]> {
    return this.http.get(API_URL_SERVICES_BY_CATEGORY_ID + '/' + id)
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        return res.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getServiceItemDetailById(id:Number):Observable<ServiceItemDetailVM> {
    return this.http.get(API_URL_SERVICE_DETAIL_BY_SERVICE_ID + '/' + id)
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        return res.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error || 'Server error'));

  }

  getServiceSessionDatesByServiceid(serviceid:number, from:Date, to:Date):Observable<SessionDateVM[]> {
    return this.http.get(API_URL_SERVICE_SESSION_DATES_BY_SERVICE_ID+ '?serviceItemId=' +serviceid+'&from='+from.toISOString()+'&to='+to.toISOString() )
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        return res.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
  getServiceSessionTimesByServiceid(serviceid:number, currentTime:Date):Observable<SessionTimeVM[]> {
    return this.http.get(API_URL_SERVICE_SESSION_TIMES_BY_SERVICE_ID+ '?serviceItemId=' +serviceid+'&dateTimeStr='+currentTime.toISOString() )
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        return res.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
