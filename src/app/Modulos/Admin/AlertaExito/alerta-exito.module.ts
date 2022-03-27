import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertaExitoComponent } from './alerta-exito.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AlertaExitoComponent],
  exports: [AlertaExitoComponent]
})
export class ExploreModalsComponentModule {}
