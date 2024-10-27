import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DashboardOverviewComponent } from "./components/dashboard-overview/dashboard-overview.component";
import { CoursesOverviewComponent } from "./components/courses-overview/courses-overview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, DashboardOverviewComponent, CoursesOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-dashboard';
}
