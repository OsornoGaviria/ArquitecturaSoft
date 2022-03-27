import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import { UsuarioLogeadoGuard } from '../../Guards/usuario-logeado.guard';
import { UsuarioNoLogeadoGuard } from '../../Guards/usuario-no-logeado.guard';



const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [UsuarioLogeadoGuard] 
},
{
  path: 'home',
  component: HomeComponent,
  canActivate: [UsuarioLogeadoGuard] 
},
{
  path: '**',
  component: HomeComponent,
  canActivate: [UsuarioLogeadoGuard] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrincipalRoutingModule { }
