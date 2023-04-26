import { Component } from '@angular/core';

import { ButtonComponent, EFabButtonComponent, FabButtonComponent, IconButtonComponent } from '@fafn/components/buttons';
import { ContainerComponent } from '@fafn/components/container';
import { GRID } from '@fafn/components/grid';
import { IconComponent } from '@fafn/components/icon';

@Component({
  selector: 'fafn-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [ButtonComponent, ContainerComponent, GRID, IconComponent, FabButtonComponent, EFabButtonComponent, IconButtonComponent],
})
export class DemoComponent {}
