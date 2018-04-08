import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FetchdataserviceService} from './fetchdataservice.service';
import { AppComponent } from './app.component';
import { AuthsetupService } from './authsetup.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FetchdataserviceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthsetupService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
