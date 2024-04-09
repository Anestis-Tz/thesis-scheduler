import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInitializer } from './interceptors/app.initializer';

/** Modules */
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

/** Material for Routes */
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

/** PrimeNG for Routes */

/** Components */
import { AppComponent } from './app.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { LoginComponent } from './routes/user/login/login.component';
import { RegisterComponent } from './routes/user/register/register.component';
import { TermsComponent } from './routes/terms/terms.component';
import { ClassRegistrationComponent } from './routes/class-registration/class-registration.component';
// import { CalendarComponent } from './routes/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    TermsComponent,
    ClassRegistrationComponent,
    // CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    DialogsModule,
    MatIconModule,
    MatSelectModule,
    SharedModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [{ 
      provide: HTTP_INTERCEPTORS, 
      useClass: AppInitializer, 
      multi: true,
    },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
