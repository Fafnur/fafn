import { Component } from '@angular/core';

import { ButtonComponent } from '@fafn/components/buttons';
import { ContainerComponent } from '@fafn/components/container';
import { IconComponent } from '@fafn/components/icon';

@Component({
  selector: 'fafn-page-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  standalone: true,
  imports: [ButtonComponent, ContainerComponent, IconComponent],
})
export class IconsComponent {}
