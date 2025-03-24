import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private e: ElementRef) {
    this.e = this.e;
  }

  @HostListener('blur') onBlur(){
    this.e.nativeElement.innerHTML.toUpperCase();
  }

}
