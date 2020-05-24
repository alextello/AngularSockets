import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css'],
})
export class MensajesComponent implements OnInit {
  constructor(public wsService: WebsocketService) {}

  ngOnInit(): void {}

  salir() {
    this.wsService.logoutWS();
  }
}
