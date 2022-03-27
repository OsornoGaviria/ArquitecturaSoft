import { Component, OnInit } from '@angular/core';
import { ScriptsService } from '../../../Servicios/scripts.service';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.scss']
})

export class ConductoresComponent implements OnInit {

  conductores;

  displayedColumns: string[] = [ 'name', 'telefono' ,'correo', 'estado', 'options'];

  constructor(private scriptsService:ScriptsService) { }

  ngOnInit() {
    this.verCondcutores();
  }

  verCondcutores(){
    this.scriptsService.Conductores().subscribe(res=>{
      this.conductores=res;
      console.log(res)
    })
  }


  Delete(id){
    this.scriptsService.eliminarConductores(id).then(res=>{
       if(res=="true"){
         alert("Conductor Eliminado")
       }
       else{
         alert("Error al eliminar conductor")
       }
    })
 }

}
