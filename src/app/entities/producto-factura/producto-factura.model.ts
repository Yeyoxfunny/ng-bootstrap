import { Factura } from '../factura/factura.model';
import { Producto } from '../producto/producto.model';

export interface ProductoFactura {
  IdProductoFactura?: string;
  cantidad: Number;

  /** Many-To-One Relationships */
  
  idFactura?: String;
  factura?: Factura;

  idProducto?: String;
  producto?: Producto;

}
