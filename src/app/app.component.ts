import { Component, OnInit } from '@angular/core';
import  { AngularFirestore}  from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  constructor(private Conexion : AngularFirestore){

  }

  ngOnInit(){
   this.Conexion.collection('usuarios').valueChanges().subscribe(res=>{
    console.log(res)
  });
  }
}
