import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent implements OnInit {
  usuariosActivosObs: Observable<any>;

  constructor(
    public chatService: ChatService,
    public wsChat: WebsocketService
  ) {}

  ngOnInit(): void {
    this.usuariosActivosObs = this.chatService.getUsuariosActvos();

    // Emitir el obtener-usuarios
    this.chatService.emitirUsuariosActvos();
  }
}
