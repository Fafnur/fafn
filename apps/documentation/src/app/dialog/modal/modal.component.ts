import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '@fafn/components/buttons';
import {
  DialogActionsComponent,
  DialogBodyComponent,
  DialogCloseDirective,
  DialogComponent,
  DialogIconComponent,
  DialogTitleComponent,
} from '@fafn/components/dialog';
import { IconComponent } from '@fafn/components/icon';

@Component({
  selector: 'fafn-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DialogComponent,
    DialogTitleComponent,
    DialogBodyComponent,
    DialogActionsComponent,
    ButtonComponent,
    IconComponent,
    DialogIconComponent,
    DialogCloseDirective,
  ],
})
export class ModalComponent {}
