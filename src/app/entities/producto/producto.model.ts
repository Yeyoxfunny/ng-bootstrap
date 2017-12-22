import { Proveedor } from '../proveedor/proveedor.model';

export interface Producto {
  IdProducto?: string;
  nombre: String;
  cantidad: Number;
  valorUnitario: Number;
  descripcion: String;
  activo: Boolean;

  /** Many-To-One Relationships */
  
  idProveedor?: String;
  proveedor?: Proveedor;

}
