import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Proveedor } from './proveedor.model';
import { ProveedorService } from './proveedor.service';

@Component({
  selector: 'app-proveedor-details',
  templateUrl: './proveedor-details.component.html'
})
export class ProveedorDetailsComponent implements OnInit {

  proveedor: Proveedor;

    constructor(
      private proveedorService: ProveedorService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const IdProveedor = params['IdProveedor'];
        this.proveedorService.getById(IdProveedor).subscribe(proveedor => this.proveedor = proveedor);
      });
    }
  }
