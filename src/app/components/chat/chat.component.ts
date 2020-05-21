import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  public texto: string;
  mensajesSuscription: Subscription;
  mensajes: any[] = [];
  mensajesElement: HTMLElement;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.mensajesElement = document.getElementById('chat-mensajes');
    this.mensajesSuscription = this.chatService
      .getMessages()
      .subscribe((msg) => {
        this.mensajes.push(msg);
        setTimeout(() => {
          this.mensajesElement.scrollTop = this.mensajesElement.scrollHeight;
        }, 50);
      });
  }

  ngOnDestroy(): void {
    this.mensajesSuscription.unsubscribe();
  }

  enviar() {
    if (this.texto.trim()) {
      this.chatService.sendMessage(this.texto);
      console.log(this.texto);
      this.texto = '';
    }
  }
}
