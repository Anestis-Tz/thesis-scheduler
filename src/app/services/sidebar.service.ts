import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarState = new BehaviorSubject<boolean>(false);

  features = environment.features;

  mainItems: any = {
    ADMIN: {
      needsLogin: true,
      data: {
        label: 'Admin',
        icon: 'fas fa-user-shield h2',
        location: '/admin',
        action: "changeLocation('admin')",
      }
    },
    CLASSES: {
        needsLogin: false,
        data: {
          label: 'Classes',
          icon: 'fas fa-calendar-alt h2',
          location: '/classes',
          action: "changeLocation('classes')",
        }
    },
    REGISTRATION: {
      needsLogin: true,
      data: {
        label: 'class_registration',
        icon: 'fas fa-calendar-plus h2',
        location: '/class-registration',
        action: "changeLocation('class-registration')",
      },
    },
  };

  adminItems: any = {
    STUDENTS: {
      needsLogin: true,
      data: {
        label: 'students',
        icon: 'fas fa-users h2',
        location: '/students',
        action: "changeLocation('students')",
      },
    },
    CLASSES: {
      needsLogin: true,
      data: {
        label: 'classes',
        icon: 'fas fa-calendar-alt h2',
        location: '/classes',
        action: "changeLocation('classes')",
      },
    },
    GENERAL: {
      needsLogin: true,
      data: {
        label: 'general',
        icon: 'fas fa-cogs h2',
        location: '/general',
        action: "changeLocation('general')",
      },
    },
  };

  constructor() {
    // Conditional Sidebar Items
    if (this.features.appointments.enabled) {
      this.mainItems.APPOINTMENT = {
        needsLogin: true,
        data: {
          label: 'appointment_planner',
          icon: 'fas fa-calendar-alt h2',
          location: '/scheduler',
          action: "changeLocation('scheduler')",
        },
      };
    }
  }

  getMainSidebarItems() {
    let items = []
    for (let item in this.mainItems) items.push(this.mainItems[item].data);
      return items;
  }

  toggle() {
    this.sidebarState.next(!this.sidebarState.value);
  }

  getState(): Observable<boolean> {
    return this.sidebarState.asObservable();
  }
}
