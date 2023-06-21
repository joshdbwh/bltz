import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shell',
    loadChildren: () => import('@ez/shell').then((m) => m.shellRoutes),
  },
];
