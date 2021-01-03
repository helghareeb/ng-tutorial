// بسم الله الرحمن الرحيم

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Product[]

  @Output()
  onProductSelected : EventEmitter<Product> = new EventEmitter()

  private currentProduct: Product

  constructor() { }

  ngOnInit(): void {
  }

  productWasSelected(product: Product): void{
    this.onProductSelected.emit(product)
  }

  isSelected(product: Product): boolean{
    if (!product || !this.currentProduct) {
      return false
    }
    return product.sku === this.currentProduct.sku
  }

}
