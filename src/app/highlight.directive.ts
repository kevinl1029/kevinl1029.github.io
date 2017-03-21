import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[lAHighlight]'
})
export class HighlightDirective {

  // @HostListener('mouseenter') mouseover() {
  //   this.backgroundColor = 'red';
  // };
  // @HostListener('mouseleave') mouseleave() {
  //   this.backgroundColor = 'bisque';
  // };
  @HostListener('onclick') onclick() {
    this.backgroundColor = 'red';
  }
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };

  private backgroundColor = 'bisque';

  constructor() { }

}
