import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})

export class NavbarComponent {

  constructor(private sidebarService: SidebarService) { }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
