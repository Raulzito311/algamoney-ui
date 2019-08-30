import { FuncionarioService } from './funcionario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';


@NgModule({
  declarations: [
    FuncionarioFormComponent,
    FuncionarioCardComponent,

    CampoColoridoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule { }
