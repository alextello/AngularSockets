import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { environment } from './../environments/environment';

const config: SocketIoConfig = { url: environment.url, options: {} };

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
@NgModule({
  declarations: [AppComponent, FooterComponent, ChatComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
