import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  newFromgroup: FormGroup;
  constructor() { }

  ngOnInit() {
    //Setting New Form
    this.newFromgroup = new FormGroup({
      firstname: new FormControl({
        validators: Validators.required,
        updateOn: 'change'
      }),
      lastname: new FormControl({
        validators: Validators.required,
        updateOn: 'change'
      })
    })
  }

}
