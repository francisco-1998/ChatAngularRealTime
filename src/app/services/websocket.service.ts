import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;
  public usuario: Usuario;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  //Metodo para ver el estado del servidor
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

  //Metodo para emitir eventos
  // event_name   = Nombre del evento
  // data  = Lo que se enviar
  emitEvent(event_name: string, data?: any ) {
    // console.log('Emitiendo', event_name);
    this.socket.emit(event_name, data);
  }


  //Metodo para escuchar eventos
  listenEvent(eventName: string) {
    return this.socket.fromEvent(eventName);
  }

  loginWS(nombre: String) {
    console.log('Configurando' + nombre);
    this.emitEvent('configurar-usuario', nombre);
  }
}
