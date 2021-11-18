import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHoverClass]'
})
export class HoverClassDirective {
  @Input('appHoverClass') public hoverClass: any;

  constructor(public elementRef: ElementRef) { }

  @HostListener('mouseenter') private onMouseEnter(): void {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') private onMouseLeave(): void {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

}
