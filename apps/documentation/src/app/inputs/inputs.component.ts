import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { FafnContainer } from '@fafn/components/container';
import { FafnControl } from '@fafn/components/control';
import { FafnHint } from '@fafn/components/hint';
import { FafnInput } from '@fafn/components/input';
import { FafnLabel } from '@fafn/components/label';

@Component({
  selector: 'fafn-page-icons',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FafnContainer, ReactiveFormsModule, FafnInput, FafnControl, FafnLabel, FafnHint],
})
export class InputsComponent {
  control = new FormControl<string>('Simple', { nonNullable: true });
}
