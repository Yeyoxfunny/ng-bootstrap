import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntitiesSharedModule } from '../entities-shared.module';
import { ClienteSharedModule } from '../cliente/cliente-shared.module';


import { ClienteComponent } from './cliente.component';
import { ClienteUpSertComponent } from './cliente-upsert.component';
import { ClienteDetailsComponent } from './cliente-details.component';
import { ClienteService } from './cliente.service';

import { clienteRoutes } from './cliente.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clienteRoutes),
    EntitiesSharedModule,
    ClienteSharedModule    
  ],
  declarations: [
    ClienteComponent,
    ClienteUpSertComponent,
    ClienteDetailsComponent
  ],
  providers: [ ClienteService ]
})
export class ClienteModule { }
