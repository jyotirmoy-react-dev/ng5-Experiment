import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpInterceptor,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthsetupService implements HttpInterceptor {

  intercept(req:HttpRequest<any>,next : HttpHandler):Observable<HttpEvent<any>> {
    const newreq = req.clone({
      headers:req.headers.set('Authorization','token 8fde607e4db0cd5032e4b66bc6b1effb2704422d')
    })
        console.log('Interceptor Called');
        return next.handle(req);
  }

}
