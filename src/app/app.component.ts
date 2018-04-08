import { Component } from '@angular/core';
import { FetchdataserviceService } from './fetchdataservice.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private: login = '';
  btnDisabled = false;
  private: dataRes = {};
  private: send_data = {
    'userId': 232,
    'id': 11212,
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita '
  };
  constructor(private fetchdataService: FetchdataserviceService){

  }
  saveData() {
    let send_data = this.send_data;
    this.fetchdataService.saveData(send_data).subscribe(res=>{
      console.log(res);
    },
    err=>{
      console.error(err);
    })
  }
  fetchData() {
    this.btnDisabled = true;
      this.fetchdataService.getData().subscribe(res => {
        this.dataRes = res;
        console.log(this.dataRes);
        this.btnDisabled = false;
        this.login = this.dataRes.login;
      },
    (err: HttpErrorResponse)=>{
     
        console.log('Server Error')
      
        
    });
  }
}
