import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
  isOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.getState().subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}