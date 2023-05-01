import { Component } from '@angular/core';

import { ButtonComponent, EFabButtonComponent, FabButtonComponent, IconButtonComponent } from '@fafn/components/buttons';
import { ContainerComponent } from '@fafn/components/container';
import { IconComponent } from '@fafn/components/icon';

@Component({
  selector: 'fafn-page-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  standalone: true,
  imports: [ButtonComponent, ContainerComponent, IconComponent, FabButtonComponent, EFabButtonComponent, IconButtonComponent],
})
export class ButtonsComponent {}
