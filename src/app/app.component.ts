import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
import { Tarefa } from './tarefa';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tarefas';

  tarefas: Tarefa[] = []

  adicionarTarefa = (tituloTarefa: string) => {
    this.tarefas.push(new Tarefa(tituloTarefa))
  }
  // nomes = [
  //   new Pessoa(1, 'Bonieky', 90),
  //   new Pessoa(2, 'Paulo', 20),
  //   new Pessoa(3, 'Fulano', 40),
  //   new Pessoa(4, 'Ciclano', 70),
  //   new Pessoa(5, 'Beltrano', 50),
  //   new Pessoa(5, 'João', 5),

  // ]

  // nomePrincipal = 'Bonieky'

  // corPrincipal = 'red'

  // clicou = (pessoa: Pessoa) => {
  //   alert("Clicou em " + pessoa.nome)
  // }

  // alterarNomePrincipalInput = (nome: string) => {
  //    this.nomePrincipal = nome
  // }
 }
