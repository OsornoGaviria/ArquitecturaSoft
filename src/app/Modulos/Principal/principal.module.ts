import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';

import { MaterialModule } from '../../Material/material.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, HeaderComponent],
  
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule
  ]
})

export class PrincipalModule { }
