// بسم الله الرحمن الرحيم

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe(
      (data: Product[]) => {
        console.log(data)
        this.products = data
      }
    )
  }

  private productClicked(product: Product): void{
    console.log(product)
  }

}
