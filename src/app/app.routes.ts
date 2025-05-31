import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'estudio',
    loadComponent: () =>
      import('./pages/estudio.component').then((m) => m.EstudioComponent),
  },
  {
    path: 'recomendaciones',
    loadComponent: () =>
      import('./pages/recomendaciones.component').then(
        (m) => m.RecomendacionesComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin.component').then((m) => m.AdminComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/home.component').then((m) => m.HomeComponent),
  },
];
