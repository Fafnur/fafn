import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from '@fafn/components/container';
import { GRID } from '@fafn/components/grid';

@Component({
  selector: 'fafn-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, GRID],
})
export class AppComponent {}
