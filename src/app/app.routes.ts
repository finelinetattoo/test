import { Routes } from '@angular/router';
import { EstudioComponent } from './pages/estudio.component';
import { RecomendacionesComponent } from './pages/recomendaciones.component';
import { AdminComponent } from './pages/admin.component';

export const routes: Routes = [
  {
    path: 'estudio',
    component: EstudioComponent,
  },
  {
    path: 'recomendaciones',
    component: RecomendacionesComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
];
