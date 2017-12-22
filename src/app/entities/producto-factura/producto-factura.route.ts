import { Routes } from '@angular/router';

import { ProductoFacturaComponent } from './producto-factura.component';
import { ProductoFacturaUpSertComponent } from './producto-factura-upsert.component';
import { ProductoFacturaDetailsComponent } from './producto-factura-details.component';

export const productoFacturaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductoFacturaComponent },
      { path: 'create', component: ProductoFacturaUpSertComponent },
      { path: ':IdProductoFactura', component: ProductoFacturaDetailsComponent },
      { path: ':IdProductoFactura/update', component: ProductoFacturaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/producto-factura/';
