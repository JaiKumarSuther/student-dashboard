import { Component } from '@angular/core';
import { MeetingComponent } from "./meeting/meeting.component";

@Component({
  selector: 'app-upcoming-meetings',
  standalone: true,
  imports: [MeetingComponent],
  templateUrl: './upcoming-meetings.component.html',
  styleUrls: ['./upcoming-meetings.component.css'] // corrected from styleUrl to styleUrls
})
export class UpcomingMeetingsComponent {
  courses = [
    {
      name: "Web Design",
      lessons: 28,
      backgroundColor: "#8A70D6",
      color: "#FBFBFB"
    },
    {
      name: "Java Development",
      lessons: 12,
      backgroundColor: "#E5F3FF",
      color: "#000"
    },
    {
      name: "Web Design",
      lessons: 28,
      backgroundColor: "#E9E3FF",
      color: "#000"
    }
  ];
}
