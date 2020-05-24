import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;
  private usuario: Usuario;
  constructor(private socket: Socket, private router: Router) {
    this.checkStatus();
    this.cargarStorage();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
      this.cargarStorage();
    });
    this.socket.on('disconnect', () => {
      console.log('Desconectado al servidor');
      this.socketStatus = false;
    });
  }

  emit(evento: string, payload?: any, callback?: any) {
    this.socket.emit(evento, payload, callback);
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }

  loginWS(nombre: string) {
    return new Promise((res, rej) => {
      this.emit('configurar-usuario', { nombre }, (resp: any) => {
        this.usuario = new Usuario(nombre);
        this.guardarStorage();
        res();
      });
    });
  }

  logoutWS() {
    this.usuario = null;
    localStorage.removeItem('usuario');
    const payload = {
      nombre: 'Anónimo',
    };
    this.emit('configurar-usuario', payload, () => {});
    this.router.navigate(['/']);
  }

  guardarStorage() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

  cargarStorage() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.loginWS(this.usuario.nombre);
    }
  }

  getUsuario() {
    return this.usuario;
  }
}
