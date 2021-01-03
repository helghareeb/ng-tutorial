// بسم الله الرحمن الرحيم

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

@Input()
imageUrl: string

  constructor() { }

  ngOnInit(): void {
  }

}
