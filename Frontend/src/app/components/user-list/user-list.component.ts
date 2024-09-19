// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../service/socket.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  newUser = { name: '' };

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    // Subscribe to user list updates from the server
    this.socketService.getUserList().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  // Add a new user
  addUser() {
    if (this.newUser.name.trim()) {
      this.socketService.addUser(this.newUser);
      this.newUser.name = ''; // Clear input field
    }
  }
}
