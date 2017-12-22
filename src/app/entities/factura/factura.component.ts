import { Component, OnInit, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { FacturaService } from './factura.service';
import { Factura } from './factura.model';

@Component({
  selector: 'app-factura',
  template: `
              <div class="container-fluid">
                <app-factura-list [facturas]="facturas"></app-factura-list>

                <div class="row justify-content-center" *ngIf="facturas && facturas.length">
                <ngb-pagination [collectionSize]="totalElements" [(page)]="page"
                [pageSize]="elementsPerPage" [boundaryLinks]="true"
                (pageChange)="loadAll()"></ngb-pagination>
                </div>
              </div>
            `
})
export class FacturaComponent implements OnInit {
  page: any;
  totalElements: any;
  elementsPerPage: any;
  facturas: Factura[] = [];

  constructor(private facturaService: FacturaService) {
    this.page = 1;
      this.elementsPerPage = 2;
  }

  ngOnInit() {
    this.loadAll();
  }
   private loadAll() {
    const query = { page: this.page - 1, size: this.elementsPerPage };
    this.facturaService.getAll(query).subscribe((response: Response) => {
      this.facturas = response.json() as Factura[];
      this.totalElements = response.headers.get('X-Total-Count');
    });
  }
}
