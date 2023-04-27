import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DialogComponent } from '@fafn/components/dialog';

@Component({
  selector: 'fafn-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DialogComponent],
})
export class ModalComponent {}
