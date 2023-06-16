import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, Renderer2, ViewChild } from '@angular/core';

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
export class ControlComponent implements AfterViewInit {
  @ContentChild(FafnLabel) label: FafnLabel | undefined;
  @ContentChild(FafnInput) control: FafnInput | undefined;
  @ViewChild(ControlInputComponent, { static: true }) controlInput!: ControlInputComponent;

  constructor(private readonly renderer: Renderer2) {}

  ngAfterViewInit(): void {
    console.log();
    this.control?.elementRef.nativeElement.addEventListener('click', () => {
      this.renderer.addClass(this.label?.elementRef.nativeElement, 'active');
      this.renderer.addClass(this.controlInput.elementRef.nativeElement, 'active');
    });

    this.control?.elementRef.nativeElement.addEventListener('focusout', () => {
      this.renderer.removeClass(this.label?.elementRef.nativeElement, 'active');
      this.renderer.removeClass(this.controlInput.elementRef.nativeElement, 'active');
    });
  }
}
