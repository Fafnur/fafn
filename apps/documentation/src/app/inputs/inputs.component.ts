import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { FafnButton, FafnIconButton } from '@fafn/components/buttons';
import { FafnContainer } from '@fafn/components/container';
import { FafnHint } from '@fafn/components/hint';
import { FafnIcon } from '@fafn/components/icon';
import { FafnInput, FafnInputControl, FafnPrefix, FafnSuffix } from '@fafn/components/input';
import { FafnLabel } from '@fafn/components/label';

@Component({
  selector: 'fafn-page-icons',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FafnContainer,
    ReactiveFormsModule,
    FafnInputControl,
    FafnInput,
    FafnLabel,
    FafnHint,
    FafnSuffix,
    FafnPrefix,
    FafnButton,
    FafnIconButton,
    FafnIcon,
    NgIf,
  ],
})
export class InputsComponent {
  control = new FormControl<string>('', { nonNullable: true });
  controlDisabled = new FormControl<string>({ value: 'Dis 123', disabled: true }, { nonNullable: true });

  onReset() {
    this.control.reset();
  }
}
