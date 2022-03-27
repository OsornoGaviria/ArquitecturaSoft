import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent  } from './dash/dash.component';
import { PanelComponent } from './panel/panel.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { HomeComponent } from './../Principal/home/home.component';
import {VerConductorComponent} from './ver-conductor/ver-conductor.component';

import { UsuarioNoLogeadoGuard } from '../../Guards/usuario-no-logeado.guard';

const routes: Routes = [{
  path: '',
  component: DashComponent,

  },
  {
    path: 'admin',
    component: DashComponent,
    canActivate: [UsuarioNoLogeadoGuard],
    
    children:[{
    path: 'cpanel',
    component: PanelComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent,
  },
  {
    path: 'conductores',
    component: ConductoresComponent,
  },
  {
    path: 'detallec/:id',
    component: VerConductorComponent,
  }
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
