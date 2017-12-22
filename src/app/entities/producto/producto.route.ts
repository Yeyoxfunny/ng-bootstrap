import { Routes } from '@angular/router';

import { ProductoComponent } from './producto.component';
import { ProductoUpSertComponent } from './producto-upsert.component';
import { ProductoDetailsComponent } from './producto-details.component';

export const productoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductoComponent },
      { path: 'create', component: ProductoUpSertComponent },
      { path: ':IdProducto', component: ProductoDetailsComponent },
      { path: ':IdProducto/update', component: ProductoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/producto/';
