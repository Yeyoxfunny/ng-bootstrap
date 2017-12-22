const repository = require('./cliente.repository');

function extractData(req) {
  return {
      nombre: req.body.nombre,
      activo: req.body.activo,
      fechaNacimiento: req.body.fechaNacimiento,
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

class ClienteController {
  getAll(req, res) {
    repository.get(req.query)
    .then((document) => {
      res.set('X-Total-Count', document.totalCount);
      res.json(document.cliente);
    })
    .catch(handleError(res));
  }
  getById(req, res) {
    const IdCliente = req.params.IdCliente;
    repository.getById(IdCliente)
      .then((cliente) => {
        if (!cliente) {
          return res.status(404).json({ error: `El recurso con el id ${IdCliente} no se encuentra` });
        }
        res.json(cliente);
      })
      .catch(handleError(res));
  }

  insert(req, res) {
    const _cliente = extractData(req);

    repository.add(_cliente)
      .then((cliente) => {
        res.status(201).json(cliente);
      })
      .catch(handleError(res));
  }

  update(req, res) {
    const IdCliente = req.params.IdCliente;
    const _cliente = extractData(req);

    repository.update(IdCliente, _cliente)
      .then((cliente) => {
        if (!cliente) {
          return res.status(404).json({ error: `El recurso con el id ${IdCliente} no se encuentra` });
        }
        res.json(cliente);
      })
      .catch(handleError(res));
  }

  remove(req, res) {
    const IdCliente = req.params.IdCliente;
    repository.remove(IdCliente)
      .then((cliente) => {
        if (!cliente) {
          return res.status(404).json({ error: `El recurso con el id ${IdCliente} no se encuentra` });
        }
        res.status(204).json();
      })
      .catch(handleError(res));
  }
}

module.exports = ClienteController;
