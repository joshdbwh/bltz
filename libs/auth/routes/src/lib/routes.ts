import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        loadComponent: async () =>
          (await import('@bltz/auth/feature-register')).RegisterComponent,
      },
      {
        path: 'sign-in',
        loadComponent: async () =>
          (await import('@bltz/auth/feature-sign-in')).SignInComponent,
      },
    ],
  },
];
