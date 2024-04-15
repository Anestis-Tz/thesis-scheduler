import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { environment } from '../../../environment';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})

export class SidebarComponent implements OnInit, OnDestroy {
  userIsAuthenticated: boolean = false;
  private authListenerSubs: Subscription = new Subscription();
  isOpen = false;
  features = environment.features;
  items: any;
  bottomItems: any;

  constructor(private sidebarService: SidebarService, private authService: AuthService) {
    this.sidebarService.getState().subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  ngOnInit() {
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      console.log('imhere');
      this.userIsAuthenticated = isAuthenticated;
      console.log("User Authenticated: ", isAuthenticated)
    });
    // Get main sidebar items
    this.items = this.sidebarService.getMainSidebarItems(this.userIsAuthenticated);
    // Get bottom sidebar items
    this.bottomItems = this.sidebarService.getBottomSidebarItems(this.userIsAuthenticated);
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  isLoginRoute: boolean = false;

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  //Actions
  changeLocation(location: any) {
    this.sidebarService.toggle();
    window.location = location;
  };
}