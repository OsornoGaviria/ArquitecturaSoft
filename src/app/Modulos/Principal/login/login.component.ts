import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService }  from '../../../Servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup; InfoUser;
  Icon='https://firebasestorage.googleapis.com/v0/b/driver-app-2021.appspot.com/o/LOGO%20CAR%20YA-01.svg?alt=media&token=239bad98-850a-48ac-a039-c85a53bd4691';


 constructor(private formBuilder: FormBuilder,
  private loginService: LoginService,
  private router: Router) {
      this.buildForm();
   }

  ngOnInit(){
  
  }

  login(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    this.loginService.LoginUsuario(value.email, value.password).then(res => {
      this.InfoUser =res;

      window.localStorage['IdUsuario']=  this.InfoUser.user.uid;
      console.log( window.localStorage['IdUsuario'])
  
      this.router.navigate(['/admin/cpanel']);
   }).catch(err =>{
      alert("ERROR")
   })
   }
   



  
  

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
