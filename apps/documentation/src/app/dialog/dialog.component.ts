import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { tap } from 'rxjs';

import { ButtonComponent } from '@fafn/components/buttons';
import { ContainerComponent } from '@fafn/components/container';

import { ModalComponent } from './modal/modal.component';
import { ModalFullscreenComponent } from './modal-fullscreen/modal-fullscreen.component';

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
    this.dialog.open(ModalComponent).closed.pipe(tap(console.log)).subscribe();
  }

  onOpenFullscreen(): void {
    this.dialog.open(ModalFullscreenComponent, { panelClass: 'is-fullscreen' }).closed.pipe(tap(console.log)).subscribe();
  }
}