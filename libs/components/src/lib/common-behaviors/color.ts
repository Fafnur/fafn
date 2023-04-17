import { ElementRef } from '@angular/core';

import { AbstractConstructor, Constructor } from './constructor';

export interface CanColor {
  color: ThemePalette;

  defaultColor: ThemePalette | undefined;
}

type CanColorCtor = Constructor<CanColor> & AbstractConstructor<CanColor>;

export interface HasElementRef {
  elementRef: ElementRef;
}

/** Possible color palette values. */
export type ThemePalette = 'primary' | 'accent' | 'warn' | undefined;

/** Mixin to augment a directive with a `color` property. */
export function mixinColor<T extends AbstractConstructor<HasElementRef>>(base: T, defaultColor?: ThemePalette): CanColorCtor & T;
export function mixinColor<T extends Constructor<HasElementRef>>(base: T, defaultColor?: ThemePalette): CanColorCtor & T {
  return class extends base {
    private _color: ThemePalette;

    defaultColor = defaultColor;

    get color(): ThemePalette {
      return this._color;
    }

    set color(value: ThemePalette) {
      const colorPalette = value || this.defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this.elementRef.nativeElement.classList.remove(`mat-${this._color}`);
        }
        if (colorPalette) {
          this.elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(...args);

      // Set the default color that can be specified from the mixin.
      this.color = defaultColor;
    }
  };
}
