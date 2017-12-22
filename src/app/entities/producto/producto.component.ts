import { Component, OnInit, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { ProductoService } from './producto.service';
import { Producto } from './producto.model';

@Component({
  selector: 'app-producto',
  template: `
              <div class="container-fluid">
                <app-producto-list [productos]="productos"></app-producto-list>

                <div class="row justify-content-center" *ngIf="productos && productos.length">
                <ngb-pagination [collectionSize]="totalElements" [(page)]="page"
                [pageSize]="elementsPerPage" [boundaryLinks]="true"
                (pageChange)="loadAll()"></ngb-pagination>
                </div>
              </div>
            `
})
export class ProductoComponent implements OnInit {
  page: any;
  totalElements: any;
  elementsPerPage: any;
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {
    this.page = 1;
      this.elementsPerPage = 2;
  }

  ngOnInit() {
    this.loadAll();
  }
   private loadAll() {
    const query = { page: this.page - 1, size: this.elementsPerPage };
    this.productoService.getAll(query).subscribe((response: Response) => {
      this.productos = response.json() as Producto[];
      this.totalElements = response.headers.get('X-Total-Count');
    });
  }
}
