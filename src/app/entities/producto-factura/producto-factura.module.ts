import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntitiesSharedModule } from '../entities-shared.module';
import { ProductoFacturaSharedModule } from '../producto-factura/producto-factura-shared.module';

import { FacturaSharedModule } from '../factura/factura-shared.module';
import { ProductoSharedModule } from '../producto/producto-shared.module';

import { ProductoFacturaComponent } from './producto-factura.component';
import { ProductoFacturaUpSertComponent } from './producto-factura-upsert.component';
import { ProductoFacturaDetailsComponent } from './producto-factura-details.component';
import { ProductoFacturaService } from './producto-factura.service';

import { productoFacturaRoutes } from './producto-factura.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productoFacturaRoutes),
    EntitiesSharedModule,
    ProductoFacturaSharedModule,    
    FacturaSharedModule,    
    ProductoSharedModule    
  ],
  declarations: [
    ProductoFacturaComponent,
    ProductoFacturaUpSertComponent,
    ProductoFacturaDetailsComponent
  ],
  providers: [ ProductoFacturaService ]
})
export class ProductoFacturaModule { }
