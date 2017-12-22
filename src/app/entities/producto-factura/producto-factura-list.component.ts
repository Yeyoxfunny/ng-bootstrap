import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductoFacturaService } from './producto-factura.service';
import { ProductoFactura } from './producto-factura.model';
import { absolutePath } from './producto-factura.route';

@Component({
  selector: 'app-producto-factura-list',
  templateUrl: './producto-factura-list.component.html'
})
export class ProductoFacturaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() productoFacturas: ProductoFactura[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private productoFacturaService: ProductoFacturaService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  openDeleteModal(content: any, IdProductoFactura: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.productoFacturaService.delete(IdProductoFactura).subscribe(response => {
          this.productoFacturas = this.productoFacturas.filter(productoFactura => productoFactura.IdProductoFactura !== IdProductoFactura);
        });
      }
    }, (reason) => {});
  }
}
