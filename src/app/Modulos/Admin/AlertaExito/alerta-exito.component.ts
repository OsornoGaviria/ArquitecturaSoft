import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ModalController} from '@ionic/angular';

@Component({
  selector: 'app-alerta-exito',
  templateUrl: './alerta-exito.component.html',
  styleUrls: ['./alerta-exito.component.scss'],
})
export class AlertaExitoComponent implements OnInit {

  constructor(private modal: ModalController, private router:Router) { }

  ngOnInit() {}


  Cerrar(){
      this.modal.dismiss();

  }

}
