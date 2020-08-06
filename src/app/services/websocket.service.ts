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
    this.socket.on('connect',() => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    })

    this.socket.on('disconnect',() => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    })
  }

}
