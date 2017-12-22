import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';


@Component({
  selector: 'app-cliente-upsert',
  templateUrl: './cliente-upsert.component.html'
})
export class ClienteUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  cliente: Cliente;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const IdCliente = params['IdCliente'];
      if (IdCliente) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.clienteService.getById(IdCliente).subscribe(cliente => this.cliente = cliente);
      }
    });
  }

  save(formValues) {
    this.cliente = formValues;
    this.clienteService.insert(this.cliente).subscribe(
      (response) => {
        this.router.navigate(['/entities/cliente']);
      }
    );
  }

  update() {
    this.clienteService.update(this.cliente.IdCliente, this.cliente).subscribe(
      (response) => {
        this.router.navigate(['/entities/cliente']);
      }
    );
  }
}
