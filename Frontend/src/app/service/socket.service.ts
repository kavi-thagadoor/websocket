// socket.service.ts
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  // Emit new user data to the server
  addUser(user: any) {
    this.socket.emit('addUser', user);
  }

  // Listen for user list updates
  getUserList(): Observable<any[]> {
    return new Observable((observer) => {
      this.socket.on('updateUserList', (users: any[]) => {
        observer.next(users);
      });
    });
  }
}
