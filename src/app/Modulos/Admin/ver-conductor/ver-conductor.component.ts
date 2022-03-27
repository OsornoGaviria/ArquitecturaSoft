import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ ScriptsService } from '../../../Servicios/scripts.service';
import  {ModalController } from '@ionic/angular'
import { AlertaExitoComponent} from '../AlertaExito/alerta-exito.component'

@Component({
  selector: 'app-ver-conductor',
  templateUrl: './ver-conductor.component.html',
  styleUrls: ['./ver-conductor.component.scss']
})

export class VerConductorComponent implements OnInit {

  info;
  idConductor;
  constructor(private parametro:ActivatedRoute,
    private scriptsService:ScriptsService,
    private router: Router,
    private modal: ModalController ) { }

  ngOnInit(){
    this.parametro.params.subscribe((params)=>{
      this.idConductor=params.id;
      this.infoConductor()
    })
  }

  infoConductor(){
    this.scriptsService.Conductor(this.idConductor).subscribe(res=>{
      this.info=res;
      console.log(this.info)
    })
  }


  activar(x){
    this.scriptsService.ActivarConductor(x).then(res=>{
        if(res="true"){
          this.alert();
          this.router.navigate(['admin/conductores'])
        }
    })
  }


  async alert(){
      const modal = await this.modal.create({
        component: AlertaExitoComponent,
        cssClass: 'my-alert-modal-fna',
        componentProps: {
         
        },
        showBackdrop: true,
        backdropDismiss: false,
      })
  
 
      return await modal.present();
    
  }

 

}
