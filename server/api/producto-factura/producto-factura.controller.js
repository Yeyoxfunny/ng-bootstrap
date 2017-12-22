const repository = require('./producto-factura.repository');

function extractData(req) {
  return {
      cantidad: req.body.cantidad,
      idFactura: req.body.idFactura,
      idProducto: req.body.idProducto,
    };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ msg: `Error al realizar la petición ${err}` });
    } else {
      res.status(statusCode).json({ msg: `Ocurrión un error en el servidor ${err}` });
    }
  };
}

class ProductoFacturaController {
  getAll(req, res) {
    repository.get(req.query)
    .then((document) => {
      res.set('X-Total-Count', document.totalCount);
      res.json(document.productoFactura);
    })
    .catch(handleError(res));
  }
  getById(req, res) {
    const IdProductoFactura = req.params.IdProductoFactura;
    repository.getById(IdProductoFactura)
      .then((productoFactura) => {
        if (!productoFactura) {
          return res.status(404).json({ error: `El recurso con el id ${IdProductoFactura} no se encuentra` });
        }
        res.json(productoFactura);
      })
      .catch(handleError(res));
  }

  insert(req, res) {
    const _productoFactura = extractData(req);

    repository.add(_productoFactura)
      .then((productoFactura) => {
        res.status(201).json(productoFactura);
      })
      .catch(handleError(res));
  }

  update(req, res) {
    const IdProductoFactura = req.params.IdProductoFactura;
    const _productoFactura = extractData(req);

    repository.update(IdProductoFactura, _productoFactura)
      .then((productoFactura) => {
        if (!productoFactura) {
          return res.status(404).json({ error: `El recurso con el id ${IdProductoFactura} no se encuentra` });
        }
        res.json(productoFactura);
      })
      .catch(handleError(res));
  }

  remove(req, res) {
    const IdProductoFactura = req.params.IdProductoFactura;
    repository.remove(IdProductoFactura)
      .then((productoFactura) => {
        if (!productoFactura) {
          return res.status(404).json({ error: `El recurso con el id ${IdProductoFactura} no se encuentra` });
        }
        res.status(204).json();
      })
      .catch(handleError(res));
  }
}

module.exports = ProductoFacturaController;
