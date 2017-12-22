const repository = require('./producto.repository');

function extractData(req) {
  return {
      nombre: req.body.nombre,
      cantidad: req.body.cantidad,
      valorUnitario: req.body.valorUnitario,
      descripcion: req.body.descripcion,
      activo: req.body.activo,
      idProveedor: req.body.idProveedor,
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

class ProductoController {
  getAll(req, res) {
    repository.get(req.query)
    .then((document) => {
      res.set('X-Total-Count', document.totalCount);
      res.json(document.producto);
    })
    .catch(handleError(res));
  }
  getById(req, res) {
    const IdProducto = req.params.IdProducto;
    repository.getById(IdProducto)
      .then((producto) => {
        if (!producto) {
          return res.status(404).json({ error: `El recurso con el id ${IdProducto} no se encuentra` });
        }
        res.json(producto);
      })
      .catch(handleError(res));
  }

  insert(req, res) {
    const _producto = extractData(req);

    repository.add(_producto)
      .then((producto) => {
        res.status(201).json(producto);
      })
      .catch(handleError(res));
  }

  update(req, res) {
    const IdProducto = req.params.IdProducto;
    const _producto = extractData(req);

    repository.update(IdProducto, _producto)
      .then((producto) => {
        if (!producto) {
          return res.status(404).json({ error: `El recurso con el id ${IdProducto} no se encuentra` });
        }
        res.json(producto);
      })
      .catch(handleError(res));
  }

  remove(req, res) {
    const IdProducto = req.params.IdProducto;
    repository.remove(IdProducto)
      .then((producto) => {
        if (!producto) {
          return res.status(404).json({ error: `El recurso con el id ${IdProducto} no se encuentra` });
        }
        res.status(204).json();
      })
      .catch(handleError(res));
  }
}

module.exports = ProductoController;
