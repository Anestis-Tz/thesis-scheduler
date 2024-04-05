/** Modules */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Components */
import { SettingsComponent } from './routes/settings/settings.component';
// import { CalendarComponent } from './routes/calendar/calendar.component';
import { LoginComponent } from './routes/user/login/login.component';
import { RegisterComponent } from './routes/user/register/register.component';
import { TermsComponent } from './routes/terms/terms.component';
import { ClassRegistrationComponent } from './routes/class-registration/class-registration.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'terms', component: TermsComponent },
  // { path: 'scheduler', component: CalendarComponent },
  { path: 'class-registration', component: ClassRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
