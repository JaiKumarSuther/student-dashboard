import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'] // corrected from styleUrl to styleUrls
})
export class MeetingComponent implements OnInit {
  @Input()
  upcomingMeetings: any; // consider using a more specific type

  ngOnInit() {
    console.log(this.upcomingMeetings);
  }
}
