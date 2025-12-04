import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  courses$: Observable<Course[]> | null = null;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.courses$ = this.store.select(state => state.courses.courses);
  }
}
