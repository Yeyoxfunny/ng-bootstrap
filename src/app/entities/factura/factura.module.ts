import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntitiesSharedModule } from '../entities-shared.module';
import { FacturaSharedModule } from '../factura/factura-shared.module';

import { ClienteSharedModule } from '../cliente/cliente-shared.module';

import { FacturaComponent } from './factura.component';
import { FacturaUpSertComponent } from './factura-upsert.component';
import { FacturaDetailsComponent } from './factura-details.component';
import { FacturaService } from './factura.service';

import { facturaRoutes } from './factura.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(facturaRoutes),
    EntitiesSharedModule,
    FacturaSharedModule,    
    ClienteSharedModule    
  ],
  declarations: [
    FacturaComponent,
    FacturaUpSertComponent,
    FacturaDetailsComponent
  ],
  providers: [ FacturaService ]
})
export class FacturaModule { }
