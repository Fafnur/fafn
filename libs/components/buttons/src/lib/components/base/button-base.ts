import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AfterViewInit, Directive, ElementRef, inject, Input, NgZone, OnDestroy, OnInit } from '@angular/core';

import { CanColor, CanDisable, CanSize, ThemePalette, ThemeSize } from '@fafn/components';

@Directive()
export class ButtonBase implements CanDisable, CanColor, CanSize, AfterViewInit, OnDestroy {
  @Input() color: ThemePalette;
  @Input() size: ThemeSize;
  @Input() mode: ThemeSize;

  private isDisabled = false;

  private readonly focusMonitor = inject(FocusMonitor);

  constructor(protected readonly elementRef: ElementRef) {}

  get disabled(): boolean {
    return this.isDisabled;
  }

  set disabled(value: string | boolean) {
    this.isDisabled = coerceBooleanProperty(value);
  }

  ngAfterViewInit() {
    this.focusMonitor.monitor(this.elementRef, true);
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  focus(origin: FocusOrigin = 'program', options?: FocusOptions): void {
    if (origin) {
      this.focusMonitor.focusVia(this.elementRef.nativeElement, origin, options);
    } else {
      this.elementRef.nativeElement.focus(options);
    }
  }
}

@Directive()
export class AnchorBase extends ButtonBase implements OnInit, OnDestroy {
  protected readonly haltDisabledEvents = (event: Event) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };

  constructor(elementRef: ElementRef, protected readonly ngZone: NgZone) {
    super(elementRef);
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.elementRef.nativeElement.addEventListener('click', this.haltDisabledEvents);
    });
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.elementRef.nativeElement.removeEventListener('click', this.haltDisabledEvents);
  }
}
