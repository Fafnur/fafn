import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { FafnInput } from '@fafn/components/input';
import { FafnLabel } from '@fafn/components/label';

import { ControlContainerComponent } from '../control-container/control-container.component';
import { ControlInputComponent } from '../control-input/control-input.component';

@Component({
  selector: 'fafn-control,[fafnControl]',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ControlContainerComponent, ControlInputComponent],
})
export class ControlComponent implements AfterViewInit, OnDestroy {
  @ContentChild(FafnLabel) label: FafnLabel | undefined;
  @ContentChild(FafnInput) control: FafnInput | undefined;
  @ViewChild(ControlInputComponent, { static: true }) controlInput!: ControlInputComponent;

  private focusin = () => {
    this.renderer.addClass(this.elementRef.nativeElement, 'active');
  };

  private focusout = () => {
    this.renderer.removeClass(this.elementRef.nativeElement, 'active');
  };

  constructor(private readonly renderer: Renderer2, private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (this.control) {
      this.control.elementRef.nativeElement.addEventListener('click', this.focusin);
      this.control.elementRef.nativeElement.addEventListener('focusout', this.focusout);
    } else {
      console.warn('Input[fafnInput] not found. Add child <input fafnInput /> in <fafn-control></fafn-control>');
    }
  }

  ngOnDestroy(): void {
    if (this.control) {
      this.control.elementRef.nativeElement.removeEventListener('click', this.focusin);
      this.control.elementRef.nativeElement.removeEventListener('focusout', this.focusout);
    }
  }
}
