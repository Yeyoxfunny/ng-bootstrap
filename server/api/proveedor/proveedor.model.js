const Sequelize = require('sequelize');
const sequelize = require('../../../server-config');

const Proveedor = sequelize.define('Proveedor',{
  IdProveedor: {
    autoIncrement:true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  
  nombre: Sequelize.STRING,  
  activo: Sequelize.BOOLEAN,  
  identificacion: Sequelize.STRING,  
},{ timestamps: false });


Proveedor.sync().then();
module.exports = Proveedor;
