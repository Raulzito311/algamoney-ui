import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CompoColoridoDirective } from './compo-colorido.directive';
import { FuncionarioService } from './funcionario.service';

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
    FuncionarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
