import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.model';
import { absolutePath } from './proveedor.route';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html'
})
export class ProveedorListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() proveedors: Proveedor[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private proveedorService: ProveedorService,
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

  openDeleteModal(content: any, IdProveedor: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.proveedorService.delete(IdProveedor).subscribe(response => {
          this.proveedors = this.proveedors.filter(proveedor => proveedor.IdProveedor !== IdProveedor);
        });
      }
    }, (reason) => {});
  }
}
