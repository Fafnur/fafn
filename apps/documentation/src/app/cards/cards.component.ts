import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FafnCard } from '@fafn/components/cards';
import { FafnContainer } from '@fafn/components/container';

@Component({
  selector: 'fafn-page-dividers',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FafnCard, FafnContainer],
})
export class CardsComponent {}
