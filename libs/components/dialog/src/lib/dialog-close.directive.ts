import { DialogRef } from '@angular/cdk/dialog';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[fafn-dialog-close]',
  standalone: true,
})
export class DialogCloseDirective {
  @Input('fafn-dialog-close') close?: unknown;

  constructor(private readonly dialogRef: DialogRef) {}

  @HostListener('click')
  onClick(): void {
    this.dialogRef.close(this.close);
  }
}
