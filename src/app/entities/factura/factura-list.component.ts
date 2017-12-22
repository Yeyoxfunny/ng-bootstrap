import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FacturaService } from './factura.service';
import { Factura } from './factura.model';
import { absolutePath } from './factura.route';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html'
})
export class FacturaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() facturas: Factura[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private facturaService: FacturaService,
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

  openDeleteModal(content: any, IdFactura: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.facturaService.delete(IdFactura).subscribe(response => {
          this.facturas = this.facturas.filter(factura => factura.IdFactura !== IdFactura);
        });
      }
    }, (reason) => {});
  }
}
