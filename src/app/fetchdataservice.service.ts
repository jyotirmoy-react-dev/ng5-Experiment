import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {UserResponse} from './user-response'
@Injectable()
export class FetchdataserviceService {

  constructor(private http: HttpClient) {

   }
  getData() {
    return this.http.get<UserResponse>('https://api.github.com/users/jyotirmoy-react-dev');
  }
  saveData(send_data){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',send_data);
  }
}
