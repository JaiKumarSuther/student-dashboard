import { Component } from '@angular/core';
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {

}
