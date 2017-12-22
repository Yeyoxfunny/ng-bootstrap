const express = require('express');
const ProductoFacturaControllerCustom = require('./producto-factura.controller.custom');
const controller = new ProductoFacturaControllerCustom();

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:IdProductoFactura', controller.getById);
router.post('/', controller.insert);
router.put('/:IdProductoFactura', controller.update);
router.delete('/:IdProductoFactura', controller.remove);

module.exports = router;
