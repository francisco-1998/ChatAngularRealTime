import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Socket
import {SocketIoModule,SocketIoConfig} from 'ngx-socket-io';
import { environment } from '../environments/environment.prod';

const config: SocketIoConfig = { url: environment.socketURL, options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
