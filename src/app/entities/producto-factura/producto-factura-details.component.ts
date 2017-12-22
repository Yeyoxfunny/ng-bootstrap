import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductoFactura } from './producto-factura.model';
import { ProductoFacturaService } from './producto-factura.service';

@Component({
  selector: 'app-producto-factura-details',
  templateUrl: './producto-factura-details.component.html'
})
export class ProductoFacturaDetailsComponent implements OnInit {

  productoFactura: ProductoFactura;

    constructor(
      private productoFacturaService: ProductoFacturaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const IdProductoFactura = params['IdProductoFactura'];
        this.productoFacturaService.getById(IdProductoFactura).subscribe(productoFactura => this.productoFactura = productoFactura);
      });
    }
  }
