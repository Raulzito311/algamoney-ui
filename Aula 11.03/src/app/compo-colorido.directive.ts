import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCompoColorido]'
})
export class CompoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') onFocus() {
    this.corDeFundo = 'green';
  }

  @HostListener('blur') onBlur() {
    this.corDeFundo = 'transparent';
  }

}
