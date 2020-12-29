// بسم الله الرحمن الرحيم

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: string[]

  constructor() { 
    this.courses = [
      'Data Structures and Algorithms',
      'Enterprise Integration',
      'Database Management Sysems'
    ]

  }

  ngOnInit(): void {
  }

}
