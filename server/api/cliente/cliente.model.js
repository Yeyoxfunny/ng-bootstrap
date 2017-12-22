const Sequelize = require('sequelize');
const sequelize = require('../../../server-config');

const Cliente = sequelize.define('Cliente',{
  IdCliente: {
    autoIncrement:true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  
  nombre: Sequelize.STRING,  
  activo: Sequelize.BOOLEAN,  
  fechaNacimiento: Sequelize.DATE,  
},{ timestamps: false });


Cliente.sync().then();
module.exports = Cliente;
