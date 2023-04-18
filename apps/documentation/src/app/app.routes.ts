import { Route } from '@angular/router';

import { LayoutComponent } from '@fafn/components/layout';

import { DemoComponent } from './demo/demo.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DemoComponent,
      },
    ],
  },
];
