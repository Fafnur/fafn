import { Route } from '@angular/router';

import { FafnLayout } from '@fafn/components/layout';

import { ButtonsComponent } from './buttons/buttons.component';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';
import { IconsComponent } from './icons/icons.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: FafnLayout,
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
      {
        path: 'icons',
        component: IconsComponent,
      },
    ],
  },
];
