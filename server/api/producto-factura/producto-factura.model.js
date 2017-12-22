const Sequelize = require('sequelize');
const sequelize = require('../../../server-config');
const Factura = require('../factura/factura.model');
const Producto = require('../producto/producto.model');

const ProductoFactura = sequelize.define('ProductoFactura',{
  IdProductoFactura: {
    autoIncrement:true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  
  cantidad: Sequelize.INTEGER,  
},{ timestamps: false });

  ProductoFactura.belongsTo(Factura, {as:'factura', foreignKey: 'idFactura'})
  ProductoFactura.belongsTo(Producto, {as:'producto', foreignKey: 'idProducto'})

ProductoFactura.sync().then();
module.exports = ProductoFactura;
