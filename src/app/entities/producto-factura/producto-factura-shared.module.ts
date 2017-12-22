import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntitiesSharedModule } from '../entities-shared.module';
import { ProductoFacturaListComponent } from './producto-factura-list.component';
import { ProductoFacturaService } from './producto-factura.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule,
  ],
  exports: [
    ProductoFacturaListComponent
  ],
  declarations: [
    ProductoFacturaListComponent
  ],
  providers: [ProductoFacturaService]
})
export class ProductoFacturaSharedModule { }
