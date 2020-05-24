import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsuarioGuard implements CanActivate {
  constructor(public wsService: WebsocketService, private router: Router) {}
  canActivate(): boolean {
    if (this.wsService.getUsuario()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
