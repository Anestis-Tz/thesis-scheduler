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
    HOME: {
      needsLogin: false,
      data: {
        label: 'home',
        icon: 'fas fa-home h2',
        location: '/',
        action: "changeLocation('')",
      },
    },
    SETTINGS: {
      needsLogin: true,
      data: {
        label: 'settings',
        icon: 'fas fa-cog h2',
        location: '/settings',
        action: "changeLocation('settings')",
      },
    },
    PROFILE: {
      needsLogin: true,
      data: {
        label: 'profile',
        icon: 'fas fa-user-circle h2',
        location: '/profile',
        action: "changeLocation('profile')",
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
    if (this.features.classRegistration.enabled) {
      this.mainItems.REGISTRATION = {
        needsLogin: true,
        data: {
          label: 'class_registration',
          icon: 'fas fa-clipboard-list h2',
          location: '/class-registration',
          action: "changeLocation('class-registration')",
        },
      };
    }
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

  getMainSidebarItems(data: boolean) {
    console.log(data);
    let items = [];
    for (let item in this.mainItems) {
      if (this.mainItems[item].needsLogin === true) {
        if (data === true) {
          items.push(this.mainItems[item].data);
        } else items.push(this.mainItems[item].data);
      }
    }
    return items;
  }

  getBottomSidebarItems(data: boolean) {
    console.log('this is the data', data);
    let bottomItems = [];
    for (let bottomItem in this.mainBottomItems) {
      if (this.mainBottomItems[bottomItem].needsLogin === data) {
        if (data === true) {
          bottomItems.push(this.mainBottomItems[bottomItem].data);
        } else bottomItems.push(this.mainBottomItems[bottomItem].data);
      }
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
