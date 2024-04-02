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
    SETTINGS: {
      data: {
        label: 'Settings',
        icon: 'fas fa-cog h2',
        location: '/settings',
        action: "changeLocation('settings')",
      },
    },
    PROFILE: {
      data: {
        label: 'Profile',
        icon: 'fas fa-user-circle h2',
        location: '/profile',
        action: "changeLocation('profile')",
      },
    },
  };

  // Not working for now, needs fixing
  mainBottomItems: any = {
    LOGOUT: {
      data: {
        label: 'Logout',
        icon: 'fas fa-sign-out-alt h2',
        location: '',
        action: 'logOut()',
      },
    },
  };

  constructor() {
    // Conditional Sidebar Items
    if (this.features.classRegistrationEnabled) {
      this.mainItems.REGISTRATION = {
        data: {
          label: 'Class Registration',
          icon: 'fas fa-clipboard-list h2',
          location: '/class-registration',
          action: "changeLocation('class-registration')",
        },
      };
    }
    if (this.features.appointmentsEnabled) {
      this.mainItems.APPOINTMENT = {
        data: {
          label: 'Appointment Planner',
          icon: 'fas fa-calendar-alt h2',
          location: '/scheduler',
          action: "changeLocation('scheduler')",
        },
      };
    }
  }

  getMainSidebarItems() {
    let items = [];
    for (let item in this.mainItems) {
      items.push(this.mainItems[item].data);
    }
    return items;
  }

  getBottomSidebarItems() {
    let bottomItems = [];
    for (let bottomItem in this.mainBottomItems) {
      bottomItems.push(this.mainBottomItems[bottomItem].data);
    }
    return bottomItems;
  }

  toggle() {
    this.sidebarState.next(!this.sidebarState.value);
  }

  getState(): Observable<boolean> {
    return this.sidebarState.asObservable();
  }
}
