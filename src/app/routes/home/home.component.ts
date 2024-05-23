import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  constructor(private router: Router) { }
  
  changeLocation(location: any) {
    this.router.navigate([location]);
  };
}
