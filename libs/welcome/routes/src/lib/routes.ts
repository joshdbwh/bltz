import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'landing',
        loadComponent: async () =>
          (await import('@bltz/welcome/feature-landing')).LandingComponent,
      },
    ],
  },
];
