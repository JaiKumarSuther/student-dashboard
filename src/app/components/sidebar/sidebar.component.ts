import { Component } from '@angular/core';
import { SubscriptionBannerComponent } from "../subscription-banner/subscription-banner.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SubscriptionBannerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
