import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[prefix],[fafnPrefix]',
  standalone: true,
})
export class PrefixDirective implements OnInit {
  constructor(private readonly element: ElementRef<HTMLElement>, private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'marginLeft', '12px');
  }
}
