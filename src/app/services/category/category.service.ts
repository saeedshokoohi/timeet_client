/**
 * Created by saeed on 12/29/2016.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {API_URL_ROOR_CATEGORIES_BY_KEY_URL}  from '../constants';
import {CategoryVM} from "../../models/CategoryVM.model";

@Injectable()
export class CategoryService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {


  }
  // private instance variable to hold base url


  public getRootCategories(keyUrl:string) : Observable<CategoryVM[]> {

      // ...using get request

      return this.http.get(API_URL_ROOR_CATEGORIES_BY_KEY_URL + '?url=' + keyUrl)
        // ...and calling .json() on the response to return data
        .map((res:Response) => { return res.json();})
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }

}