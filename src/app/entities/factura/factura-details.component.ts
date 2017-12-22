import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Factura } from './factura.model';
import { FacturaService } from './factura.service';

@Component({
  selector: 'app-factura-details',
  templateUrl: './factura-details.component.html'
})
export class FacturaDetailsComponent implements OnInit {

  factura: Factura;

    constructor(
      private facturaService: FacturaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const IdFactura = params['IdFactura'];
        this.facturaService.getById(IdFactura).subscribe(factura => this.factura = factura);
      });
    }
  }
