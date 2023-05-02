import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FafnIconButton } from '@fafn/components/buttons';
import { FafnIcon } from '@fafn/components/icon';

import { DialogCloseDirective } from '../dialog-close.directive';

@Component({
  selector: 'fafn-dialog-title,[fafnDialogTitle]',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DialogCloseDirective, FafnIcon, FafnIconButton],
})
export class DialogTitleComponent {}
