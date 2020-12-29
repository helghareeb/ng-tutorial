// بسم الله الرحمن الرحيم

import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article

  constructor( ) { 
   
  }

  ngOnInit(): void {
  }

  voteUp(){
    this.article.voteUp()
  }

  voteDown(){
    this.article.voteDown()
  }

}
