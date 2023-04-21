import { ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';

import { ButtonBase } from '../button-base/button-base';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[fafn-button],a[fafn-raised-button],a[fafn-flat-button],a[fafn-stroked-button]',
  templateUrl: '../button-base/button-base.html',
  styleUrls: ['./anchor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AnchorComponent extends ButtonBase implements OnInit, OnDestroy {
  private readonly haltDisabledEvents = (event: Event) => {
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
