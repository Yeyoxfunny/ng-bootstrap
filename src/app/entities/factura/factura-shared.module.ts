import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntitiesSharedModule } from '../entities-shared.module';
import { FacturaListComponent } from './factura-list.component';
import { FacturaService } from './factura.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule,
  ],
  exports: [
    FacturaListComponent
  ],
  declarations: [
    FacturaListComponent
  ],
  providers: [FacturaService]
})
export class FacturaSharedModule { }
