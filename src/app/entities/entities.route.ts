import { Routes } from '@angular/router';

export const entitiesRoutes: Routes = [
  { path: 'proveedor', loadChildren: './proveedor/proveedor.module#ProveedorModule' },
  { path: 'producto', loadChildren: './producto/producto.module#ProductoModule' },
  { path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule' },
  { path: 'factura', loadChildren: './factura/factura.module#FacturaModule' },
  { path: 'producto-factura', loadChildren: './producto-factura/producto-factura.module#ProductoFacturaModule' },
];

