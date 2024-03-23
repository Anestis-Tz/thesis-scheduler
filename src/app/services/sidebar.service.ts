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
          icon: 'fas fa-search h2',
          location: "/settings",
          action: "changeLocation('/settings')"
      }
    },
    PROFILE: {
      data: {
          label: "Profile",
          icon: 'fab fa-angular h1',
          location: "/profile",
          action: "changeLocation('/profile')"
      }
    },
  }

  bottonItems: any = {
    LOGOUT: {
      data: {
          label: "gen_logout",
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
    let items = [];
    for (let botomItem in this.bottonItems) {
      items.push(this.bottonItems[botomItem]);
    }
    return items;
  }

  toggle() {
    this.sidebarState.next(!this.sidebarState.value);
  }

  getState(): Observable<boolean> {
    return this.sidebarState.asObservable();
  }
}