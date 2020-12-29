// بسم الله الرحمن الرحيم

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  @Input()
  name: String

  constructor() { }

  ngOnInit(): void {

   
  }

}
