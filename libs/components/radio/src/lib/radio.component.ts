import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RadioComponent {}
