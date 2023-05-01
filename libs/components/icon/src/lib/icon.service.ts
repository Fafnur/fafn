import { DOCUMENT } from '@angular/common';
import { inject, Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export function updateAttributes(svg: SVGElement): SVGElement {
  svg.removeAttribute('id');

  svg.setAttribute('fit', '');
  svg.setAttribute('height', '100%');
  svg.setAttribute('width', '100%');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

  return svg;
}

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly state: Record<string, SVGElement | null> = {};
  private readonly document = inject(DOCUMENT);
  private readonly sanitizer = inject(DomSanitizer);

  add(name: string, icon: string): void {
    const value = this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(icon));
    if (!value) {
      console.error(`Not valid icon ${name} with content ${icon}`);
    } else {
      this.state[name] = this.getSvg(value);
    }
  }

  get(name: string): SVGElement | null {
    const source = this.state[name] ?? null;

    if (!source) {
      console.error(`Icon ${name} not found. You should register icon in IconService`);

      return null;
    }

    return source.cloneNode(true) as SVGElement;
  }

  private getSvg(source: string): SVGElement | null {
    const div = this.document.createElement('div');
    div.innerHTML = source;
    const svg = div.querySelector('svg');
    if (!svg) {
      console.error('<svg> tag not found');
    }

    return svg ? updateAttributes(svg) : svg;
  }
}
