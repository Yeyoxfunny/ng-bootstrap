import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntitiesSharedModule } from '../entities-shared.module';
import { ProveedorListComponent } from './proveedor-list.component';
import { ProveedorService } from './proveedor.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule,
  ],
  exports: [
    ProveedorListComponent
  ],
  declarations: [
    ProveedorListComponent
  ],
  providers: [ProveedorService]
})
export class ProveedorSharedModule { }
