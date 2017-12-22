import { Routes } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { ClienteUpSertComponent } from './cliente-upsert.component';
import { ClienteDetailsComponent } from './cliente-details.component';

export const clienteRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ClienteComponent },
      { path: 'create', component: ClienteUpSertComponent },
      { path: ':IdCliente', component: ClienteDetailsComponent },
      { path: ':IdCliente/update', component: ClienteUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/cliente/';
