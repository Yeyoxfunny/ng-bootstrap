const Sequelize = require('sequelize');
const sequelize = require('../../../server-config');
const Cliente = require('../cliente/cliente.model');

const Factura = sequelize.define('Factura',{
  IdFactura: {
    autoIncrement:true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  
  numero: Sequelize.INTEGER,  
  fecha: Sequelize.DATE,  
},{ timestamps: false });

  Factura.belongsTo(Cliente, {as:'cliente', foreignKey: 'idCliente'})

Factura.sync().then();
module.exports = Factura;
