import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FafnBody } from '@fafn/components/body';
import { FafnButton } from '@fafn/components/buttons';
import { FafnCard, FafnCardActions, FafnCardContent } from '@fafn/components/cards';
import { FafnContainer } from '@fafn/components/container';
import { FafnColumn, FafnRow, FafnTablet } from '@fafn/components/grid';
import { FafnHeadline } from '@fafn/components/headline';
import { FafnImage } from '@fafn/components/image';
import { FafnTitle } from '@fafn/components/title';

@Component({
  selector: 'fafn-page-dividers',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FafnCard,
    FafnContainer,
    FafnImage,
    FafnRow,
    FafnColumn,
    FafnTablet,
    FafnHeadline,
    FafnTitle,
    FafnCardContent,
    FafnBody,
    FafnCardActions,
    FafnButton,
  ],
})
export class CardsComponent {}
