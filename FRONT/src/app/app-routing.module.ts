import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComputador } from './components/views/computador/cadastrar/cadastrar.component';
import { ListarComputador } from './components/views/computador/listar/listar.component';
import { DeletarComputador } from './components/views/computador/deletar/deletar.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
