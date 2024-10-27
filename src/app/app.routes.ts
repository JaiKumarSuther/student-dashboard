import { Routes } from '@angular/router';
import { DashboardOverviewComponent } from './components/dashboard-overview/dashboard-overview.component';
import { CoursesOverviewComponent } from './components/courses-overview/courses-overview.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardOverviewComponent },
  { path: 'courses', component: CoursesOverviewComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
];
