import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})

export class SidebarComponent implements OnInit{
  isOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.getState().subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  ngOnInit() {
    console.log(this.sidebarService.getMainSidebarItems());
  }
  
  // Get main sidebar items
  items: any = this.sidebarService.getMainSidebarItems();
  // Get bottom sidebar items
  bottomItems: any = this.sidebarService.getBottomSidebarItems();

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  //Actions
  changeLocation(location: any) {
    this.sidebarService.toggle();
    window.location = location;
  };
}