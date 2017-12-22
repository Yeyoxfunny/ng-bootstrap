const repository = require('./factura.repository');

function extractData(req) {
  return {
      numero: req.body.numero,
      fecha: req.body.fecha,
      idCliente: req.body.idCliente,
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

class FacturaController {
  getAll(req, res) {
    repository.get(req.query)
    .then((document) => {
      res.set('X-Total-Count', document.totalCount);
      res.json(document.factura);
    })
    .catch(handleError(res));
  }
  getById(req, res) {
    const IdFactura = req.params.IdFactura;
    repository.getById(IdFactura)
      .then((factura) => {
        if (!factura) {
          return res.status(404).json({ error: `El recurso con el id ${IdFactura} no se encuentra` });
        }
        res.json(factura);
      })
      .catch(handleError(res));
  }

  insert(req, res) {
    const _factura = extractData(req);

    repository.add(_factura)
      .then((factura) => {
        res.status(201).json(factura);
      })
      .catch(handleError(res));
  }

  update(req, res) {
    const IdFactura = req.params.IdFactura;
    const _factura = extractData(req);

    repository.update(IdFactura, _factura)
      .then((factura) => {
        if (!factura) {
          return res.status(404).json({ error: `El recurso con el id ${IdFactura} no se encuentra` });
        }
        res.json(factura);
      })
      .catch(handleError(res));
  }

  remove(req, res) {
    const IdFactura = req.params.IdFactura;
    repository.remove(IdFactura)
      .then((factura) => {
        if (!factura) {
          return res.status(404).json({ error: `El recurso con el id ${IdFactura} no se encuentra` });
        }
        res.status(204).json();
      })
      .catch(handleError(res));
  }
}

module.exports = FacturaController;
