import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthRoutingModule } from './auth-routing.module';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    RecuperarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AuthRoutingModule,
    InputTextModule,
    MessagesModule,
    MessageModule
  ],
  exports:[
    LoginComponent,
    RegistrarComponent,
    RecuperarComponent

  ]
})
export class AuthModule { }
