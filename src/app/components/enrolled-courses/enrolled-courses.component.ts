import { Component } from '@angular/core';
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: 'app-enrolled-courses',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './enrolled-courses.component.html',
  styleUrl: './enrolled-courses.component.css'
})
export class EnrolledCoursesComponent {

}
