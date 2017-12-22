import { Component, OnInit, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-cliente',
  template: `
              <div class="container-fluid">
                <app-cliente-list [clientes]="clientes"></app-cliente-list>

                <div class="row justify-content-center" *ngIf="clientes && clientes.length">
                <ngb-pagination [collectionSize]="totalElements" [(page)]="page"
                [pageSize]="elementsPerPage" [boundaryLinks]="true"
                (pageChange)="loadAll()"></ngb-pagination>
                </div>
              </div>
            `
})
export class ClienteComponent implements OnInit {
  page: any;
  totalElements: any;
  elementsPerPage: any;
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {
    this.page = 1;
      this.elementsPerPage = 2;
  }

  ngOnInit() {
    this.loadAll();
  }
   private loadAll() {
    const query = { page: this.page - 1, size: this.elementsPerPage };
    this.clienteService.getAll(query).subscribe((response: Response) => {
      this.clientes = response.json() as Cliente[];
      this.totalElements = response.headers.get('X-Total-Count');
    });
  }
}
