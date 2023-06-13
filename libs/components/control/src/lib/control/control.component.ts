import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild } from '@angular/core';

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
  // @ContentChildren(FafnHint, { descendants: true }) hints!: QueryList<FafnHint>;

  ngAfterViewInit(): void {
    this.control?.elementRef.nativeElement.addEventListener('click', () => {
      this.label?.elementRef.nativeElement.classList.add('active');
    });

    this.control?.elementRef.nativeElement.addEventListener('focusout', () => {
      this.label?.elementRef.nativeElement.classList.remove('active');
    });
  }
}
