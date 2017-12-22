const ProductoFactura = require('./producto-factura.model');
const Factura = require('../factura/factura.model');const Producto = require('../producto/producto.model');
module.exports = {
      get(query) {
        const PAGE = parseInt(query.page);
        const ELEMENTS_BY_PAGE = parseInt(query.size);
        let TOTAL_ENTITIES = 0;

        return ProductoFactura.count().then((number) => {
            TOTAL_ENTITIES = number;
            const SKIP_ENTITIES = PAGE * ELEMENTS_BY_PAGE;
            return ProductoFactura.findAll({ offset: SKIP_ENTITIES, limit: ELEMENTS_BY_PAGE, include:["factura","producto"]});
          })
          .then((productoFactura) => { return {totalCount: TOTAL_ENTITIES, productoFactura}});
    },
    getById(IdProductoFactura) {
      return ProductoFactura.findById(IdProductoFactura,{ include: ["factura","producto"]});
    },
    add(productoFactura) {
      return ProductoFactura.create(productoFactura);
    },
    update(IdProductoFactura, productoFactura) {
      return ProductoFactura.update(productoFactura, { where: { IdProductoFactura } });
    },
    remove(IdProductoFactura) {
      return ProductoFactura.destroy({ where: { IdProductoFactura } });
    }
};
