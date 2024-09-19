import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config) // Include socket configuration
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
