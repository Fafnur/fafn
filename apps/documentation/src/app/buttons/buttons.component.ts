import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FafnButton, FafnEFabButton, FafnFabButton, FafnIconButton } from '@fafn/components/buttons';
import { FafnContainer } from '@fafn/components/container';
import { FafnIcon } from '@fafn/components/icon';

@Component({
  selector: 'fafn-page-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FafnContainer, FafnIcon, FafnButton, FafnFabButton, FafnEFabButton, FafnIconButton],
})
export class ButtonsComponent {}
