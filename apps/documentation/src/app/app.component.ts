import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent, GRID } from '@fafn/components';

@Component({
  selector: 'fafn-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, GRID],
})
export class AppComponent {}
