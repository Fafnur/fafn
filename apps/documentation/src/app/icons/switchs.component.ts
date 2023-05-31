import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { FafnContainer } from '@fafn/components/container';
import { FafnSwitch } from '@fafn/components/switch';

@Component({
  selector: 'fafn-page-icons',
  templateUrl: './switchs.component.html',
  styleUrls: ['./switchs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FafnContainer, FafnSwitch, ReactiveFormsModule],
})
export class SwitchsComponent {
  control = new FormControl<boolean>(false, { nonNullable: true });
  control2 = new FormControl<boolean>(true, { nonNullable: true });
  controlDisabled = new FormControl<boolean>({ value: false, disabled: true }, { nonNullable: true });
}
