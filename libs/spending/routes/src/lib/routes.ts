import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'spending-overvieew',
        loadComponent: async () =>
          (await import('@bltz/spending/feature-overview')).OverviewComponent,
      },
    ],
  },
];
