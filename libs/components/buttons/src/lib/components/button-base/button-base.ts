import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { AfterViewInit, Directive, ElementRef, inject, Input, NgZone, OnDestroy } from '@angular/core';

import { CanColor, CanDisable, CanSize, ThemePalette, ThemeSize } from '@fafn/components';

@Directive()
export class ButtonBase implements CanDisable, CanColor, CanSize, AfterViewInit, OnDestroy {
  @Input() color: ThemePalette;
  @Input() disabled = false;
  @Input() size: ThemeSize;

  private readonly focusMonitor = inject(FocusMonitor);

  constructor(protected readonly elementRef: ElementRef, protected readonly ngZone: NgZone) {}

  ngAfterViewInit() {
    this.focusMonitor.monitor(this.elementRef, true);
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  /**
   * Focuses the button
   *
   * @param origin FocusOrigin
   * @param options FocusOptions
   */
  focus(origin: FocusOrigin = 'program', options?: FocusOptions): void {
    if (origin) {
      this.focusMonitor.focusVia(this.elementRef.nativeElement, origin, options);
    } else {
      this.elementRef.nativeElement.focus(options);
    }
  }
}
