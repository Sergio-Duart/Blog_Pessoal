import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { userlogin } from '../model/userlogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: userlogin = new userlogin()

  constructor(
    private auth: AuthService,
    private rota: Router
  ) { }
  

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.login).subscribe((resp: userlogin)=>{
      this.login = resp
      environment.token = this.login.token
      environment.nome = this.login.nome
      environment.usuario = this.login.usuario
      environment.id = this.login.id

      this.rota.navigate(['/home'])
    }, erro => {
      if(erro.status == 500) {
        alert('Usuário ou senha estão incorretos !')
      }
    })
  }

}
