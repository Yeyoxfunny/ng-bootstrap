const express = require('express');
const FacturaControllerCustom = require('./factura.controller.custom');
const controller = new FacturaControllerCustom();

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:IdFactura', controller.getById);
router.post('/', controller.insert);
router.put('/:IdFactura', controller.update);
router.delete('/:IdFactura', controller.remove);

module.exports = router;
