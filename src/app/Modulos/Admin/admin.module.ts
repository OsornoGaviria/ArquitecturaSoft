import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashComponent } from './dash/dash.component';
import { MaterialModule } from '../../Material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PanelComponent } from './panel/panel.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { VerConductorComponent } from './ver-conductor/ver-conductor.component';


@NgModule({
  declarations: [
    DashComponent,
    MenuComponent,
    PanelComponent,
    UsuariosComponent,
    SolicitudesComponent,
    ConductoresComponent,
    VerConductorComponent,
 
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ]
})

export class AdminModule { }
