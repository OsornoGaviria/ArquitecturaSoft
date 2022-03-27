import { Component, OnInit } from '@angular/core';
import { ScriptsService } from '../../../Servicios/scripts.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios;

  displayedColumns: string[] = [ 'name', 'telefono' ,'correo', 'options'];

  constructor(private scriptsService:ScriptsService) { }

  ngOnInit() {
    this.verCondcutores();
  }

  verCondcutores(){
    this.scriptsService.Usuarios().subscribe(res=>{
      this.usuarios=res;
      console.log(res)
    })
  }

  Delete(id){
     this.scriptsService.eliminarUsuario(id).then(res=>{
        if(res=="true"){
          alert("Usuario Eliminado")
        }
        else{
          alert("Error al eliminar usuario")
        }
     })
  }


}
