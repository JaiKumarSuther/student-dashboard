import { Component } from '@angular/core';
import { ProgressOverviewComponent } from "./progress-overview/progress-overview.component";
import { CompletedModulesComponent } from "./completed-modules/completed-modules.component";

@Component({
  selector: 'app-courses-overview',
  standalone: true,
  imports: [ProgressOverviewComponent, CompletedModulesComponent],
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.css'] // Corrected to styleUrls
})
export class CoursesOverviewComponent {
  // You can add any additional logic here if needed
}
