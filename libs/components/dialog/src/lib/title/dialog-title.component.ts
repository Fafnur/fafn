import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconButtonComponent } from '@fafn/components/buttons';
import { IconComponent } from '@fafn/components/icon';

import { DialogCloseDirective } from '../dialog-close.directive';

@Component({
  selector: 'fafn-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DialogCloseDirective, IconComponent, IconButtonComponent],
})
export class DialogTitleComponent {}
