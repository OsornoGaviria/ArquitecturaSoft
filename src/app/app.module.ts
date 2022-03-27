import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {  firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/';
import{ AngularFireAuthModule} from '@angular/fire/auth';
import{ AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule  } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrincipalModule } from './Modulos/Principal/principal.module';
import { AdminModule } from './Modulos/Admin/admin.module';
import { IonicModule } from '@ionic/angular';

import { AlertaExitoComponent  } from './Modulos/Admin/AlertaExito/alerta-exito.component'

@NgModule({
  declarations: [
    AppComponent,
    AlertaExitoComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    AppRoutingModule,
    PrincipalModule,
    AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule, AngularFirestoreModule, AngularFireStorageModule, BrowserAnimationsModule, IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
