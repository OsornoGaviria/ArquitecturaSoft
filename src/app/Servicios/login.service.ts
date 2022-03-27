import { Injectable } from '@angular/core';
import  { AngularFirestore}  from '@angular/fire/firestore';
import firebase from 'firebase/app'
import  {AngularFireAuth } from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private AFauth: AngularFireAuth) { }


  LoginUsuario(email:string , password:string)
    {
      return new Promise((resolve, rejected) =>{
        this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

}
