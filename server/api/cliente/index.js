const express = require('express');
const ClienteControllerCustom = require('./cliente.controller.custom');
const controller = new ClienteControllerCustom();

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:IdCliente', controller.getById);
router.post('/', controller.insert);
router.put('/:IdCliente', controller.update);
router.delete('/:IdCliente', controller.remove);

module.exports = router;
