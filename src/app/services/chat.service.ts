import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public wsService: WebsocketService) {}

  sendMessage(mensaje: string) {
    const data = {
      de: 'Francisco',
      cuerpo: mensaje,
    };
    this.wsService.emitEvent('message', data);
  }

  getMessages(){
    return this.wsService.listenEvent('nuevo-mensaje');
  }
}
