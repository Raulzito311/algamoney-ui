import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCompoColorido]',
  exportAs: 'campoColorido'
})
export class CompoColoridoDirective {

  @Input('appCompoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
  }

}
