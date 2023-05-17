import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FafnCard } from '@fafn/components/cards';
import { FafnContainer } from '@fafn/components/container';
import { FafnImage } from '@fafn/components/image';

@Component({
  selector: 'fafn-page-dividers',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FafnCard, FafnContainer, FafnImage],
})
export class CardsComponent {}
