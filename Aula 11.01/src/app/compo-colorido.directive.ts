import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompoColorido]'
})
export class CompoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'yellow');
  }

}
