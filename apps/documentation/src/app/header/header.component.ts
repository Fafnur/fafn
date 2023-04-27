import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AnchorComponent } from '@fafn/components/buttons';

@Component({
  selector: 'fafn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AnchorComponent, NgForOf],
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
  ];
}
