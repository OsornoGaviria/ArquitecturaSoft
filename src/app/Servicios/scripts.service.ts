import { Injectable } from '@angular/core';
import  { AngularFirestore}  from '@angular/fire/firestore';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor(private BD : AngularFirestore) { }

  Usuarios(){
    return this.BD.collection('usuarios').valueChanges();
  }

  Conductores(){
    return this.BD.collection('conductores').valueChanges();
  }

  Conductor(id){
    return this.BD.collection('conductores').doc(id).valueChanges();
  }

  eliminarUsuario(id){
    return new Promise((resolve, reject )=>{
      this.BD.collection('usuarios').doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        resolve("true")
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          }).catch(err=>  reject(err))  
    })
  }


  eliminarConductores(id){
    return new Promise((resolve, reject )=>{
      this.BD.collection('conductores').doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        resolve("true")
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          }).catch(err=>  reject(err))  
    })
  }


  ActivarConductor(id){
      console.log(id)
      return new Promise((resolve, reject )=>{
        this.BD.collection('conductores').doc(id).ref.update({ 
          EstadoConductor:1
      }).then(res=>{
        resolve("true")
      })
    })
  }



}
