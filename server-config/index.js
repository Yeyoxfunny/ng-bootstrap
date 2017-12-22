  const Sequelize = require('sequelize');
  const CONST = require('../contants')
  const sequelize = new Sequelize(CONST.URL_NAME, CONST.URL_USER, CONST.URL_PASS, {
      host: CONST.URL_SQL,
      dialect: 'mssql',
      pool: {
          max: 5,
          min: 0,
          idle: 10000
      }
  });
  module.exports = sequelize;
