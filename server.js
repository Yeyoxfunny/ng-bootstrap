const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fallback = require('express-history-api-fallback');

  const fs = require('fs');
  const sequelize = require('./server-config')

  sequelize.authenticate().then(() => {
    console.log('La conexión se ha establecido correctamente.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const root = path.join(__dirname, 'dist');
app.use(express.static(root));

// api routes
const proveedor = require('./server/api/proveedor');
const producto = require('./server/api/producto');
const cliente = require('./server/api/cliente');
const factura = require('./server/api/factura');
const productoFactura = require('./server/api/producto-factura');
app.use('/api/proveedors', proveedor);
app.use('/api/productos', producto);
app.use('/api/clientes', cliente);
app.use('/api/facturas', factura);
app.use('/api/producto-facturas', productoFactura);

app.use(fallback('index.html', { root }));
app.get('*', (req, res) => {
  res.send(path.join(__dirname, 'dist/index.html'));
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: 'error'});
});

module.exports = app;
