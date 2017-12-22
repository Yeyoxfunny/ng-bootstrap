import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html'
})
export class ClienteDetailsComponent implements OnInit {

  cliente: Cliente;

    constructor(
      private clienteService: ClienteService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const IdCliente = params['IdCliente'];
        this.clienteService.getById(IdCliente).subscribe(cliente => this.cliente = cliente);
      });
    }
  }
