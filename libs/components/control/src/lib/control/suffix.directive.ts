import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[suffix],[fafnSuffix]',
  standalone: true,
})
export class SuffixDirective {
  constructor(private readonly element: ElementRef<HTMLElement>, private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'marginRight', '12px');
  }
}
