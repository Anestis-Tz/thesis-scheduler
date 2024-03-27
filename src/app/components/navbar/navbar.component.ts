import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})

export class NavbarComponent implements OnInit{

  constructor(private sidebarService: SidebarService, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginRoute = event.url === '/login';
    });
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  isLoginRoute: boolean = false;
}
