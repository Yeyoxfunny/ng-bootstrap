import { Cliente } from '../cliente/cliente.model';

export interface Factura {
  IdFactura?: string;
  numero: Number;
  fecha: Date;

  /** Many-To-One Relationships */
  
  idCliente?: String;
  cliente?: Cliente;

}
