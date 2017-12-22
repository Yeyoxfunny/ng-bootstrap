import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductoFacturaService } from './producto-factura.service';
import { ProductoFactura } from './producto-factura.model';

import { FacturaService } from '../factura/factura.service';
import { Factura } from '../factura/factura.model';
import { ProductoService } from '../producto/producto.service';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-producto-factura-upsert',
  templateUrl: './producto-factura-upsert.component.html'
})
export class ProductoFacturaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  productoFactura: ProductoFactura;

  /** Many-To-One Relationships */
  factura: Factura[];
  producto: Producto[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoFacturaService: ProductoFacturaService,
    private facturaService: FacturaService,
    private productoService: ProductoService,
  ) { }

  ngOnInit() {
    this.facturaService.getAll().subscribe(factura => this.factura = factura.json());
    this.productoService.getAll().subscribe(producto => this.producto = producto.json());
    this.route.params.subscribe((params) => {
      const IdProductoFactura = params['IdProductoFactura'];
      if (IdProductoFactura) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.productoFacturaService.getById(IdProductoFactura).subscribe(productoFactura => this.productoFactura = productoFactura);
      }
    });
  }

  save(formValues) {
    this.productoFactura = formValues;
    this.productoFacturaService.insert(this.productoFactura).subscribe(
      (response) => {
        this.router.navigate(['/entities/producto-factura']);
      }
    );
  }

  update() {
    this.productoFacturaService.update(this.productoFactura.IdProductoFactura, this.productoFactura).subscribe(
      (response) => {
        this.router.navigate(['/entities/producto-factura']);
      }
    );
  }
}
