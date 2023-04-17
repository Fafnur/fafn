import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { AfterViewInit, Directive, ElementRef, inject, NgZone, OnDestroy } from '@angular/core';

import { CanColor, CanDisable, mixinColor, mixinDisabled } from '@fafn/components';

// Boilerplate for applying mixins to MatButton.
/** @docs-private */
export const BUTTON_MIXIN = mixinColor(
  mixinDisabled(
    class {
      constructor(public elementRef: ElementRef) {}
    }
  )
);

@Directive()
export class ButtonBase extends BUTTON_MIXIN implements CanDisable, CanColor, AfterViewInit, OnDestroy {
  private readonly focusMonitor = inject(FocusMonitor);

  constructor(elementRef: ElementRef, public ngZone: NgZone) {
    super(elementRef);
  }

  ngAfterViewInit() {
    this.focusMonitor.monitor(this.elementRef, true);
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  /** Focuses the button. */
  focus(origin: FocusOrigin = 'program', options?: FocusOptions): void {
    if (origin) {
      this.focusMonitor.focusVia(this.elementRef.nativeElement, origin, options);
    } else {
      this.elementRef.nativeElement.focus(options);
    }
  }
}
