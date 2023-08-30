import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[input-suffix],[fafnInputSuffix]',
  standalone: true,
})
export class InputSuffixDirective implements OnInit {
  constructor(
    private readonly element: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'marginRight', '12px');
  }
}
