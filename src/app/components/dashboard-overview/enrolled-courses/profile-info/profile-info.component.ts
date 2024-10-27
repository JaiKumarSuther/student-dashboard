import { Component } from '@angular/core';
import { CalendarComponent } from "./calendar/calendar.component";
import { UpcomingMeetingsComponent } from '../../upcoming-meetings/upcoming-meetings.component';
@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [CalendarComponent, UpcomingMeetingsComponent],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {

}
