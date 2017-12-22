import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntitiesSharedModule } from '../entities-shared.module';
import { ClienteListComponent } from './cliente-list.component';
import { ClienteService } from './cliente.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule,
  ],
  exports: [
    ClienteListComponent
  ],
  declarations: [
    ClienteListComponent
  ],
  providers: [ClienteService]
})
export class ClienteSharedModule { }
