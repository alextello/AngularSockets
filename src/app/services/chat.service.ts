import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private wsService: WebsocketService) {}

  sendMessage(mensaje: string) {
    const payload = {
      de: this.wsService.getUsuario().nombre,
      cuerpo: mensaje,
    };
    this.wsService.emit('mensaje', payload);
  }

  getMessages() {
    return this.wsService.listen('mensaje-nuevo');
  }

  getPrivateMessages() {
    return this.wsService.listen('mensaje-privado');
  }

  getUsuariosActvos() {
    return this.wsService.listen('usuarios-activos');
  }

  emitirUsuariosActvos() {
    return this.wsService.emit('obtener-usuarios');
  }
}
