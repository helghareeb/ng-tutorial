// بسم الله الرحمن الرحيم

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  title: string = 'Welcome to Angular Tutorial - FCI Mansoura'

  constructor() { }

  ngOnInit(): void {
  }

}
