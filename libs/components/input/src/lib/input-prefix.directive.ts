import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[input-prefix],[fafnInputPrefix]',
  standalone: true,
})
export class InputPrefixDirective implements OnInit {
  constructor(
    private readonly element: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'marginLeft', '12px');
  }
}
