import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  products: Product[]

  constructor(){

    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Microsoft_logo_-_2012_%28vertical%29.svg/1910px-Microsoft_logo_-_2012_%28vertical%29.svg.png',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
        ),
        new Product(
          'JACKET',
          'Blue Jacket',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Microsoft_logo_-_2012_%28vertical%29.svg/1910px-Microsoft_logo_-_2012_%28vertical%29.svg.png',
          ['Men', 'Apparel', 'Jackets'],
          239
        ),
        new Product(
          'NICEHAT',
          'A Nice Black Hat',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Microsoft_logo_-_2012_%28vertical%29.svg/1910px-Microsoft_logo_-_2012_%28vertical%29.svg.png',
          ['Men', 'Accessories', 'Hats'],
          29.99
        )
    ]
  }

  ProductWasSelected(product: Product): void{
    console.log(`${product.name}`)
  }

}
