import { Directive, ElementRef, Input } from '@angular/core';

import { IconService } from '@fafn/components/icon';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[icon]',
  standalone: true,
})
export class SvgIconDirective {
  @Input() set icon(icon: string) {
    if (icon) {
      const svg = this.iconService.get(icon);

      if (svg) {
        this.elementRef.nativeElement.appendChild(svg);
      }
    }
  }

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly iconService: IconService,
  ) {}
}
