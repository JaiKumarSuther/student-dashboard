import { Component } from '@angular/core';
import { EnrolledCoursesComponent } from "../enrolled-courses/enrolled-courses.component";
import { LeaderboardComponent } from "../leaderboard/leaderboard.component";
import { ProfileInfoComponent } from "../profile-info/profile-info.component";

@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [EnrolledCoursesComponent, LeaderboardComponent, ProfileInfoComponent],
  templateUrl: './dashboard-overview.component.html',
  styleUrl: './dashboard-overview.component.css'
})
export class DashboardOverviewComponent {

}
