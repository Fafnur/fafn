import { Route } from '@angular/router';

import { LayoutComponent } from '@fafn/components';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },
];
