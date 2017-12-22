import { Component, OnInit, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.model';

@Component({
  selector: 'app-proveedor',
  template: `
              <div class="container-fluid">
                <app-proveedor-list [proveedors]="proveedors"></app-proveedor-list>

                <div class="row justify-content-center" *ngIf="proveedors && proveedors.length">
                <ngb-pagination [collectionSize]="totalElements" [(page)]="page"
                [pageSize]="elementsPerPage" [boundaryLinks]="true"
                (pageChange)="loadAll()"></ngb-pagination>
                </div>
              </div>
            `
})
export class ProveedorComponent implements OnInit {
  page: any;
  totalElements: any;
  elementsPerPage: any;
  proveedors: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService) {
    this.page = 1;
      this.elementsPerPage = 2;
  }

  ngOnInit() {
    this.loadAll();
  }
   private loadAll() {
    const query = { page: this.page - 1, size: this.elementsPerPage };
    this.proveedorService.getAll(query).subscribe((response: Response) => {
      this.proveedors = response.json() as Proveedor[];
      this.totalElements = response.headers.get('X-Total-Count');
    });
  }
}
