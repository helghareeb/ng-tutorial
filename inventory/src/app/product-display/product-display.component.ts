// بسم الله الرحمن الرحيم

import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  @Input()
  product: Product
  
  constructor() { }

  ngOnInit(): void {
  }

}
