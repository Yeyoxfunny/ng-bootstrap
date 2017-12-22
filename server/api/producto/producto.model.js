const Sequelize = require('sequelize');
const sequelize = require('../../../server-config');
const Proveedor = require('../proveedor/proveedor.model');

const Producto = sequelize.define('Producto',{
  IdProducto: {
    autoIncrement:true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  
  nombre: Sequelize.STRING,  
  cantidad: Sequelize.INTEGER,  
  valorUnitario: Sequelize.INTEGER,  
  descripcion: Sequelize.STRING,  
  activo: Sequelize.BOOLEAN,  
},{ timestamps: false });

  Producto.belongsTo(Proveedor, {as:'proveedor', foreignKey: 'idProveedor'})

Producto.sync().then();
module.exports = Producto;
