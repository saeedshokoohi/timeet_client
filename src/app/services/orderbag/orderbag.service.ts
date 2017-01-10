/**
 * Created by saeed on 12/29/2016.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {API_URL_PRICE_INFO_DETAIL_BY_SERVICE_ID,API_URL_SERVICE_OPTIONS_BY_SERVICE_ID
        }  from '../constants';
import {CategoryVM} from "../../models/CategoryVM.model";
import {ServiceItemVM} from "../../models/ServiceItemVM";
import {ServiceItemDetailVM} from "../../models/ServiceItemDetailVM";
import {SessionDateVM} from "../../models/SessionDateVM.model";
import {SessionTimeVM} from "../../models/SessionTimeVM.model";
import {PriceInfoDetailVM} from "../../models/PriceInfoDetailVM.model";
import {ServiceOptionVM} from "../../models/ServiceOptionVM.model";

@Injectable()
export class OrderBagService {
  // Resolve HTTP using the constructor
  constructor(private http:Http) {


  }
  getPriceInfoDetailByServiceIdAndTimeSession(serviceid:number, timesessionid:number):Observable<PriceInfoDetailVM[]> {
    return this.http.get(API_URL_PRICE_INFO_DETAIL_BY_SERVICE_ID+ '?serviceItemId=' +serviceid+'&serviceTimeSessionId='+timesessionid )
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        return res.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
  getServiceItemOptionsByServiceItemid(serviceid:number):Observable<ServiceOptionVM[]> {
    return this.http.get(API_URL_SERVICE_OPTIONS_BY_SERVICE_ID+ '?serviceItemId=' +serviceid )
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        return res.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
