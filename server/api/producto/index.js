const express = require('express');
const ProductoControllerCustom = require('./producto.controller.custom');
const controller = new ProductoControllerCustom();

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:IdProducto', controller.getById);
router.post('/', controller.insert);
router.put('/:IdProducto', controller.update);
router.delete('/:IdProducto', controller.remove);

module.exports = router;
