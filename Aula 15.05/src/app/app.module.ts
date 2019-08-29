import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CompoColoridoDirective } from './compo-colorido.directive';
import { FuncionarioService, FuncionarioAbreviadoService } from './funcionario.service';

const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(2);
};

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CompoColoridoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: FuncionarioService, useFactory: criarFuncionarioService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
