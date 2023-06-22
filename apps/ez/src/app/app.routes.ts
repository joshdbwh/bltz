import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  {
    path: 'welcome',
    loadChildren: async () => (await import('@bltz/welcome/routes')).routes,
  },
  {
    path: 'auth',
    loadChildren: async () => (await import('@bltz/auth/routes')).routes,
  },
  {
    path: 'link',
    loadChildren: async () => (await import('@bltz/link/routes')).routes,
  },
  {
    path: 'spending',
    loadChildren: async () => (await import('@bltz/spending/routes')).routes,
  },
];
