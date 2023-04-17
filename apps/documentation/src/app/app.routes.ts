import { Route } from '@angular/router';

import { LayoutComponent } from '@fafn/components/layout';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },
];
