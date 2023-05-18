import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { FafnAnchor } from '@fafn/components/buttons';

@Component({
  selector: 'fafn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FafnAnchor, NgForOf],
})
export class HeaderComponent {
  readonly links = [
    {
      route: '/buttons',
      label: 'Buttons',
    },
    {
      route: '/dialogs',
      label: 'Dialogs',
    },
    {
      route: '/icons',
      label: 'Icons',
    },
    {
      route: '/dividers',
      label: 'Dividers',
    },
    {
      route: '/cards',
      label: 'Cards',
    },
    {
      route: '/radios',
      label: 'Radio buttons',
    },
  ];
}
