import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Producto } from './producto.model';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html'
})
export class ProductoDetailsComponent implements OnInit {

  producto: Producto;

    constructor(
      private productoService: ProductoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const IdProducto = params['IdProducto'];
        this.productoService.getById(IdProducto).subscribe(producto => this.producto = producto);
      });
    }
  }
