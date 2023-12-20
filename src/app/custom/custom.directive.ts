import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements AfterViewInit{

  constructor(private Ref :ElementRef) { }

  ngAfterViewInit(): void {
    this.Ref.nativeElement.style.color="red"
  }

  getcolor(col:string){
      this.Ref.nativeElement.style.color=col
  }
}
