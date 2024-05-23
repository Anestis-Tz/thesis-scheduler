import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environment';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})

export class AppComponent {
  features = environment.features;
  isHomeRoute: boolean = false;

  constructor(private translateService: TranslateService, private router: Router) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');

    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.isHomeRoute = this.router.url == '/home';
      }
    });

  }

  title = 'thesis-scheduler';
}
