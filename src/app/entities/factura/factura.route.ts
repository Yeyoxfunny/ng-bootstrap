import { Routes } from '@angular/router';

import { FacturaComponent } from './factura.component';
import { FacturaUpSertComponent } from './factura-upsert.component';
import { FacturaDetailsComponent } from './factura-details.component';

export const facturaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: FacturaComponent },
      { path: 'create', component: FacturaUpSertComponent },
      { path: ':IdFactura', component: FacturaDetailsComponent },
      { path: ':IdFactura/update', component: FacturaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/factura/';
