import { Component } from '@angular/core';

import { ButtonComponent } from '@fafn/components/buttons';
import { ContainerComponent } from '@fafn/components/container';

@Component({
  selector: 'fafn-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [ButtonComponent, ContainerComponent],
})
export class DemoComponent {}
