import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Programador', 'Empresário', 'Outra'];
  profissao = 'Programador';

  salvar(form: NgForm) {
    console.log(form);
    console.log(form.value.nome);
  }

}
