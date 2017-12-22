import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntitiesSharedModule } from '../entities-shared.module';
import { ProveedorSharedModule } from '../proveedor/proveedor-shared.module';


import { ProveedorComponent } from './proveedor.component';
import { ProveedorUpSertComponent } from './proveedor-upsert.component';
import { ProveedorDetailsComponent } from './proveedor-details.component';
import { ProveedorService } from './proveedor.service';

import { proveedorRoutes } from './proveedor.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(proveedorRoutes),
    EntitiesSharedModule,
    ProveedorSharedModule    
  ],
  declarations: [
    ProveedorComponent,
    ProveedorUpSertComponent,
    ProveedorDetailsComponent
  ],
  providers: [ ProveedorService ]
})
export class ProveedorModule { }
