import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntitiesSharedModule } from '../entities-shared.module';
import { ProductoSharedModule } from '../producto/producto-shared.module';

import { ProveedorSharedModule } from '../proveedor/proveedor-shared.module';

import { ProductoComponent } from './producto.component';
import { ProductoUpSertComponent } from './producto-upsert.component';
import { ProductoDetailsComponent } from './producto-details.component';
import { ProductoService } from './producto.service';

import { productoRoutes } from './producto.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productoRoutes),
    EntitiesSharedModule,
    ProductoSharedModule,    
    ProveedorSharedModule    
  ],
  declarations: [
    ProductoComponent,
    ProductoUpSertComponent,
    ProductoDetailsComponent
  ],
  providers: [ ProductoService ]
})
export class ProductoModule { }
