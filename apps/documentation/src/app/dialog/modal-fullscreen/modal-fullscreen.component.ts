import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '@fafn/components/buttons';
import {
  DialogActionsComponent,
  DialogBodyComponent,
  DialogCloseDirective,
  DialogComponent,
  DialogFullscreenDirective,
  DialogIconComponent,
  DialogTitleComponent,
} from '@fafn/components/dialog';
import { IconComponent } from '@fafn/components/icon';

@Component({
  selector: 'fafn-modal-fullscreen',
  templateUrl: './modal-fullscreen.component.html',
  styleUrls: ['./modal-fullscreen.component.scss'],
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
    DialogFullscreenDirective,
  ],
})
export class ModalFullscreenComponent {}
