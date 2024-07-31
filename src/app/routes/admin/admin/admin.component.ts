import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

    constructor() { }
  
    adminItems = {
      USERS: {
        name: 'Users',
        icon: 'fas fa-users h2'
      },
      EDIT_TOOL: {
        name: 'Edit Tool',
        icon: 'fas fa-pencil h2'
      },
      
    }

    editItems = {
        
    }

    selectedItem: string = 'USERS';

    ngOnInit(): void { }

    onItemSelect(itemKey: string): void {
      this.selectedItem = itemKey;
    }
}
