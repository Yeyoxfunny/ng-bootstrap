import { Component, OnInit, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { ProductoFacturaService } from './producto-factura.service';
import { ProductoFactura } from './producto-factura.model';

@Component({
  selector: 'app-producto-factura',
  template: `
              <div class="container-fluid">
                <app-producto-factura-list [productoFacturas]="productoFacturas"></app-producto-factura-list>

                <div class="row justify-content-center" *ngIf="productoFacturas && productoFacturas.length">
                <ngb-pagination [collectionSize]="totalElements" [(page)]="page"
                [pageSize]="elementsPerPage" [boundaryLinks]="true"
                (pageChange)="loadAll()"></ngb-pagination>
                </div>
              </div>
            `
})
export class ProductoFacturaComponent implements OnInit {
  page: any;
  totalElements: any;
  elementsPerPage: any;
  productoFacturas: ProductoFactura[] = [];

  constructor(private productoFacturaService: ProductoFacturaService) {
    this.page = 1;
      this.elementsPerPage = 2;
  }

  ngOnInit() {
    this.loadAll();
  }
   private loadAll() {
    const query = { page: this.page - 1, size: this.elementsPerPage };
    this.productoFacturaService.getAll(query).subscribe((response: Response) => {
      this.productoFacturas = response.json() as ProductoFactura[];
      this.totalElements = response.headers.get('X-Total-Count');
    });
  }
}
