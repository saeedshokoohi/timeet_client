/**
 * Created by saeed on 1/18/2017.
 */
import {Request, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {HttpInterceptor} from 'angular2-http-interceptor';
export class AuthInterceptor implements HttpInterceptor {
  before(request: Request): Request {
    //do something ...
//    console.log(request);
    request.withCredentials=true;
//    console.log(request);
    return request;
  }

  after(res: Observable<Response>): Observable<any> {
    //do something ...
  //  console.log(res);
    return res;
  }

}
