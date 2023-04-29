import { Route } from '@angular/router';

import { LayoutComponent } from '@fafn/components/layout';

import { ButtonsComponent } from './buttons/buttons.component';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header',
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'dialogs',
        component: DialogComponent,
      },
    ],
  },
];
