import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { environment } from '../../../environment';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private sidebarService: SidebarService, private authService: AuthService, private router: Router) {
    this.sidebarService.getState().subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  ngOnInit() {
    // Get user authentication status
    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
    
    // Get main sidebar items
    this.items = this.sidebarService.getMainSidebarItems();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  //Actions
  changeLocation(location: any) {
    this.sidebarService.toggle();
    this.router.navigate([location]);
  };
}