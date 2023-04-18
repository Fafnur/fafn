import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from '@fafn/components/container';

import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'fafn-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, DemoComponent],
})
export class AppComponent {}
