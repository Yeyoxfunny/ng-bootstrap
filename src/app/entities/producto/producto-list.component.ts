import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductoService } from './producto.service';
import { Producto } from './producto.model';
import { absolutePath } from './producto.route';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html'
})
export class ProductoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() productos: Producto[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private productoService: ProductoService,
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

  openDeleteModal(content: any, IdProducto: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.productoService.delete(IdProducto).subscribe(response => {
          this.productos = this.productos.filter(producto => producto.IdProducto !== IdProducto);
        });
      }
    }, (reason) => {});
  }
}
