import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'estudio',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'recomendaciones',
    renderMode: RenderMode.Prerender,
  },
  // {
  //   path: 'admin',
  //   renderMode: RenderMode.Server,
  // },
  // {
  //   path: '**',
  //   renderMode: RenderMode.Server,
  // },
];
