import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductoService } from './producto.service';
import { Producto } from './producto.model';

import { ProveedorService } from '../proveedor/proveedor.service';
import { Proveedor } from '../proveedor/proveedor.model';

@Component({
  selector: 'app-producto-upsert',
  templateUrl: './producto-upsert.component.html'
})
export class ProductoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  producto: Producto;

  /** Many-To-One Relationships */
  proveedor: Proveedor[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
  ) { }

  ngOnInit() {
    this.proveedorService.getAll().subscribe(proveedor => this.proveedor = proveedor.json());
    this.route.params.subscribe((params) => {
      const IdProducto = params['IdProducto'];
      if (IdProducto) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.productoService.getById(IdProducto).subscribe(producto => this.producto = producto);
      }
    });
  }

  save(formValues) {
    this.producto = formValues;
    this.productoService.insert(this.producto).subscribe(
      (response) => {
        this.router.navigate(['/entities/producto']);
      }
    );
  }

  update() {
    this.productoService.update(this.producto.IdProducto, this.producto).subscribe(
      (response) => {
        this.router.navigate(['/entities/producto']);
      }
    );
  }
}
