import { Component } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public wService: WebsocketService,
    public chatService: ChatService
  ) {
    this.wService.checkStatus();
  }
}
