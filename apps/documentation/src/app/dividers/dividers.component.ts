import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FafnContainer } from '@fafn/components/container';
import { FafnDivider, FafnInset, FafnMiddleInset } from '@fafn/components/divider';

@Component({
  selector: 'fafn-page-dividers',
  templateUrl: './dividers.component.html',
  styleUrls: ['./dividers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FafnDivider, FafnInset, FafnMiddleInset, FafnContainer],
})
export class DividersComponent {}
