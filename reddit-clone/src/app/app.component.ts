import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[]

  constructor(){
    this.articles = [
      new Article('Angular', 'https://angular.io', 3),
      new Article('Medical Informatics', 'https://csifac.mans.edu.eg', 5),
      new Article('Software Engineering', 'https://csifac.mans.edu.eg', 4),
    ]
  }

  addArticle(title: HTMLInputElement, link:HTMLInputElement): boolean{
    // console.log(`Adding article ${title.value} and link: ${link.value}`)
    this.articles.push(new Article(title.value, link.value))
    return false

  }
}
