import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';
import { userlogin } from "../model/userlogin";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: usuario = new usuario
  confirmarSenha: string
  tipoUsuario: string

  constructor(  
    private auth: AuthService,
    private rota: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      alert('Senha Incorreta !')
    } else {
      this.auth.cadastrar(this.user).subscribe((resp: usuario) => {
        this.user = resp
        this.rota.navigate(['/login'])
        alert('Usuário cadastrado com sucesso !')
      })
    }
  }
}
