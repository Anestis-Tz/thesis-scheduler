import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  // Existing properties
  selectedItem: string = 'USERS';

  // Mock users array
  users = [
    { id: 1, name: 'Alice', lastName: "Johnson", email: 'alice@example.com', age: 10 },
    { id: 2, name: 'Bob', lastName: "Smith",  email: 'bob@example.com', age: 15 },
    { id: 3, name: 'Charlie', lastName: "Brown", email: 'charlie@example.com', age: 23 },
  ];

  constructor() {}

  ngOnInit(): void {}

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
  // Handle edit user
  onEditUser(user: any): void {
    alert(`Edit user: ${user.name}`);
    // Add your logic here
  }

  // Handle delete user
  onDeleteUser(user: any): void {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.users = this.users.filter((u) => u.id !== user.id);
    }
  }

  onItemSelect(itemKey: string): void {
    this.selectedItem = itemKey;
  }
}

