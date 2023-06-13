import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { FafnButton, FafnIconButton } from '@fafn/components/buttons';
import { FafnContainer } from '@fafn/components/container';
import { FafnControl, FafnSuffix, FafnPrefix } from '@fafn/components/control';
import { FafnHint } from '@fafn/components/hint';
import { FafnIcon } from '@fafn/components/icon';
import { FafnInput } from '@fafn/components/input';
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
    FafnInput,
    FafnControl,
    FafnLabel,
    FafnHint,
    FafnSuffix,
    FafnPrefix,
    FafnButton,
    FafnIconButton,
    FafnIcon,
  ],
})
export class InputsComponent {
  control = new FormControl<string>('', { nonNullable: true });
}
