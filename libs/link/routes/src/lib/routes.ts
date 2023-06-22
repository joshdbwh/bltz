import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'account-overview',
        loadComponent: async () =>
          (await import('@bltz/link/feature-account-overview'))
            .AccountOverviewComponent,
      },
      {
        path: 'connect-account',
        loadComponent: async () =>
          (await import('@bltz/link/feature-connect-account'))
            .ConnectAccountComponent,
      },
    ],
  },
];
