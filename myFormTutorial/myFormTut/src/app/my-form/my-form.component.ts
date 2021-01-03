// بسم الله الرحمن الرحيم

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void{
    console.log(form)
    // console.log(`Form Value: ${form.value}`)
    // console.log(`nameInput Value: ${form.value['nameInput']}`)
    // console.log(`Errors: ${form.errors}`)
    // console.log(`Valid: ${form.valid}`)
    // console.log(`Dirty: ${form.dirty}`)
  }

}
