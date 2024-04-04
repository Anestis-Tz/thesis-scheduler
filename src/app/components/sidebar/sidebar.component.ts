import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})

export class SidebarComponent implements OnInit{
  isOpen = false;
  features = environment.features;

  constructor(private sidebarService: SidebarService, private router: Router) {
    this.sidebarService.getState().subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginRoute = event.url === '/login' || event.url === '/register';
    });
  }

  isLoginRoute: boolean = false;

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