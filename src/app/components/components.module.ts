// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentsModule { }
