import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '@fafn/components/buttons';
import { DialogActionsComponent, DialogBodyComponent, DialogComponent, DialogTitleComponent } from '@fafn/components/dialog';

@Component({
  selector: 'fafn-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DialogComponent, DialogTitleComponent, DialogBodyComponent, DialogActionsComponent, ButtonComponent],
})
export class ModalComponent {}
