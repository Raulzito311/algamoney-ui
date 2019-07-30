import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Raul Fernandes';
  dataAniversario = new Date(2003, 2, 6);
  preco = 12855.32;
  troco = 0.57392;

}
