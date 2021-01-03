// بسم الله الرحمن الرحيم

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {

  @Input()
  department: string

  constructor() { }

  ngOnInit(): void {
  }

}
