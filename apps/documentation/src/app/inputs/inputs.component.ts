import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { FafnContainer } from '@fafn/components/container';
import { FafnInput } from '@fafn/components/input';

@Component({
  selector: 'fafn-page-icons',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FafnContainer, ReactiveFormsModule, FafnInput],
})
export class InputsComponent {
  control = new FormControl<string>('', { nonNullable: true });
}
