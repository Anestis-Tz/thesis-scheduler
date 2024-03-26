import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SidebarService {
  private sidebarState = new BehaviorSubject<boolean>(false);

  mainItems: any = {
    SETTINGS: {
      data: {
          label: "Settings",
          icon: 'fas fa-cog h2',
          location: "/settings",
          action: "changeLocation('settings')"
      }
    },
    PROFILE: {
      data: {
          label: "Profile",
          icon: 'fas fa-user-circle h2',
          location: "/profile",
          action: "changeLocation('/profile')"
      }
    },
    CLASS_REGISTRATION: {
      data: {
          label: "Class Registration",
          icon: 'fas fa-user-circle h2',
          location: "test",
          action: "changeLocation('/class-registration')"
      }
    }
  }

  mainBottomItems: any = {
    LOGOUT: {
      data: {
          label: "Logout",
          icon: 'fas fa-sign-out-alt h2',
          location: "",
          action: "logOut()"
      }
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
      bottomItems.push(this.mainBottomItems[bottomItem]);
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