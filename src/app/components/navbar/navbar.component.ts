import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environment';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})

export class NavbarComponent implements OnInit{
  userIsAuthenticated: boolean = false;
  private authListenerSubs: Subscription = new Subscription();
  features = environment.features;
  items: any;
  bottomItems: any;

  constructor(private sidebarService: SidebarService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
    this.items = this.sidebarService.getMainSidebarItems();
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
  
  changeLocation(location: any) {
    this.router.navigate([location]);
  };
  
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  openSettings() {
    this.changeLocation('settings');
  }

  openHelp() {
    // this.changeLocation('help');
  }

  openProfile() {
    this.changeLocation('profile');
  }

  logout() {
    // this.authService.logout();
  }

  isLoginRoute: boolean = false;
}
