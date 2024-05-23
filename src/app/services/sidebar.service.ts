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

  // Not working for now, needs fixing
  mainBottomItems: any = {
    LOGOUT: {
      needsLogin: true,
      data: {
        label: 'logout',
        icon: 'fas fa-sign-out-alt h2',
        location: '',
        action: 'logOut()',
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

  getBottomSidebarItems() {
    let bottomItems = [];
    for (let bottomItem in this.mainBottomItems) bottomItems.push(this.mainBottomItems[bottomItem].data);
      return bottomItems;
    }

  toggle() {
    this.sidebarState.next(!this.sidebarState.value);
  }

  getState(): Observable<boolean> {
    return this.sidebarState.asObservable();
  }
}
