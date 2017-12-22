import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FacturaService } from './factura.service';
import { Factura } from './factura.model';

import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente.model';

@Component({
  selector: 'app-factura-upsert',
  templateUrl: './factura-upsert.component.html'
})
export class FacturaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  factura: Factura;

  /** Many-To-One Relationships */
  cliente: Cliente[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private facturaService: FacturaService,
    private clienteService: ClienteService,
  ) { }

  ngOnInit() {
    this.clienteService.getAll().subscribe(cliente => this.cliente = cliente.json());
    this.route.params.subscribe((params) => {
      const IdFactura = params['IdFactura'];
      if (IdFactura) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.facturaService.getById(IdFactura).subscribe(factura => this.factura = factura);
      }
    });
  }

  save(formValues) {
    this.factura = formValues;
    this.facturaService.insert(this.factura).subscribe(
      (response) => {
        this.router.navigate(['/entities/factura']);
      }
    );
  }

  update() {
    this.facturaService.update(this.factura.IdFactura, this.factura).subscribe(
      (response) => {
        this.router.navigate(['/entities/factura']);
      }
    );
  }
}
