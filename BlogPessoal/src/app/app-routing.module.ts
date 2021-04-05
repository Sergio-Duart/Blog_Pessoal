import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostDelComponent } from './delete/post-del/post-del.component';
import { TemaDelComponent } from './delete/tema-del/tema-del.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastrar', component: CadastroComponent},
  {path:'home', component: HomeComponent},
  {path:'tema', component: TemaComponent},
  {path:'tema-edit/:id', component: TemaEditComponent},
  {path:'tema-delete/:id', component: TemaDelComponent},
  {path:'post-edit/:id', component: PostEditComponent},
  {path:'post-delete/:id', component: PostDelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
