import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FafnButton } from '@fafn/components/buttons';
import {
  FafnDialog,
  FafnDialogActions,
  FafnDialogBody,
  FafnDialogClose,
  FafnDialogFullscreen,
  FafnDialogIcon,
  FafnDialogTitle,
} from '@fafn/components/dialog';
import { FafnIcon } from '@fafn/components/icon';

@Component({
  selector: 'fafn-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FafnButton,
    FafnIcon,
    FafnDialogActions,
    FafnDialogBody,
    FafnDialogClose,
    FafnDialog,
    FafnDialogFullscreen,
    FafnDialogIcon,
    FafnDialogTitle,
  ],
})
export class ModalComponent {}
