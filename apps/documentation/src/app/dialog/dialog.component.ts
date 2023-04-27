import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

import { ButtonComponent } from '@fafn/components/buttons';
import { ContainerComponent } from '@fafn/components/container';

import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'fafn-page-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [ContainerComponent, ButtonComponent, DialogModule],
})
export class DialogComponent {
  constructor(private readonly dialog: Dialog) {}

  onOpen(): void {
    this.dialog.open(ModalComponent, { minWidth: '300px' });
  }
}
