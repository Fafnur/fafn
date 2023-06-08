import { NgClass } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, QueryList } from '@angular/core';

import { FafnHint } from '@fafn/components/hint';
import { FafnInput } from '@fafn/components/input';
import { FafnLabel } from '@fafn/components/label';

@Component({
  selector: 'fafn-control,[fafnControl]',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgClass],
})
export class ControlComponent implements AfterViewInit {
  @ContentChild(FafnLabel) label: FafnLabel | undefined;
  @ContentChild(FafnInput) control: FafnInput | undefined;
  @ContentChildren(FafnHint, { descendants: true }) hints!: QueryList<FafnHint>;

  ngAfterViewInit(): void {}
}
