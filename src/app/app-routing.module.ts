import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modulos/Principal/home/home.component';
import { PrincipalModule}  from './Modulos/Principal/principal.module';
import { UsuarioLogeadoGuard } from './Guards/usuario-logeado.guard';
import { UsuarioNoLogeadoGuard } from './Guards/usuario-no-logeado.guard';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Modulos/Principal/principal.module').then(m => m.PrincipalModule),
    canActivate: [ UsuarioLogeadoGuard ],
  },
  {
    path: 'home',
    loadChildren: () => import('./Modulos/Principal/principal.module').then(m => m.PrincipalModule),
    canActivate: [ UsuarioLogeadoGuard ],
  },
  {
    path: 'admin',
    loadChildren: () => import('./Modulos/Admin/admin.module').then(m => m.AdminModule),
    canActivate: [ UsuarioNoLogeadoGuard ],
  },
  {
    path: '**',
    loadChildren: () => import('./Modulos/Principal/principal.module').then(m => m.PrincipalModule),
     canActivate: [ UsuarioLogeadoGuard  ],
  },
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
