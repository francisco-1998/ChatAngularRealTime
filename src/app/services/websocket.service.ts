import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  // event_name   = Nombre del evento
  // data  = Lo que se enviar
  emitEvent(event_name: string, data?: any) {
    console.log('Emitiendo', event_name);
    this.socket.emit(event_name, data);
  }

  listenEvent(eventName: string) {
    return this.socket.fromEvent(eventName);
  }
}
