import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FafnContainer } from '@fafn/components/container';
import { FafnRadio } from '@fafn/components/radio';

@Component({
  selector: 'fafn-page-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FafnRadio, FafnContainer],
})
export class RadiosComponent {}
