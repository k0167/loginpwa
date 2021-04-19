import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
 
const routes: Routes = [
    {   path: 'login',   component: LoginComponent   },
    {   path: 'registrar',   component: RegistrarComponent   },
    {   path: 'recuperar',   component: RecuperarComponent   },
    {   path: '',   redirectTo: '/login', pathMatch: 'full' }
  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }