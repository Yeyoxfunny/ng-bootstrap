import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntitiesSharedModule } from '../entities-shared.module';
import { ProductoListComponent } from './producto-list.component';
import { ProductoService } from './producto.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule,
  ],
  exports: [
    ProductoListComponent
  ],
  declarations: [
    ProductoListComponent
  ],
  providers: [ProductoService]
})
export class ProductoSharedModule { }
