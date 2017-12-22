const repository = require('./proveedor.repository');

function extractData(req) {
  return {
      nombre: req.body.nombre,
      activo: req.body.activo,
      identificacion: req.body.identificacion,
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

class ProveedorController {
  getAll(req, res) {
    repository.get(req.query)
    .then((document) => {
      res.set('X-Total-Count', document.totalCount);
      res.json(document.proveedor);
    })
    .catch(handleError(res));
  }
  getById(req, res) {
    const IdProveedor = req.params.IdProveedor;
    repository.getById(IdProveedor)
      .then((proveedor) => {
        if (!proveedor) {
          return res.status(404).json({ error: `El recurso con el id ${IdProveedor} no se encuentra` });
        }
        res.json(proveedor);
      })
      .catch(handleError(res));
  }

  insert(req, res) {
    const _proveedor = extractData(req);

    repository.add(_proveedor)
      .then((proveedor) => {
        res.status(201).json(proveedor);
      })
      .catch(handleError(res));
  }

  update(req, res) {
    const IdProveedor = req.params.IdProveedor;
    const _proveedor = extractData(req);

    repository.update(IdProveedor, _proveedor)
      .then((proveedor) => {
        if (!proveedor) {
          return res.status(404).json({ error: `El recurso con el id ${IdProveedor} no se encuentra` });
        }
        res.json(proveedor);
      })
      .catch(handleError(res));
  }

  remove(req, res) {
    const IdProveedor = req.params.IdProveedor;
    repository.remove(IdProveedor)
      .then((proveedor) => {
        if (!proveedor) {
          return res.status(404).json({ error: `El recurso con el id ${IdProveedor} no se encuentra` });
        }
        res.status(204).json();
      })
      .catch(handleError(res));
  }
}

module.exports = ProveedorController;
