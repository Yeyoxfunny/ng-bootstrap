const Producto = require('./producto.model');
const Proveedor = require('../proveedor/proveedor.model');
module.exports = {
      get(query) {
        const PAGE = parseInt(query.page);
        const ELEMENTS_BY_PAGE = parseInt(query.size);
        let TOTAL_ENTITIES = 0;

        return Producto.count().then((number) => {
            TOTAL_ENTITIES = number;
            const SKIP_ENTITIES = PAGE * ELEMENTS_BY_PAGE;
            return Producto.findAll({ offset: SKIP_ENTITIES, limit: ELEMENTS_BY_PAGE, include:["proveedor"]});
          })
          .then((producto) => { return {totalCount: TOTAL_ENTITIES, producto}});
    },
    getById(IdProducto) {
      return Producto.findById(IdProducto,{ include: ["proveedor"]});
    },
    add(producto) {
      return Producto.create(producto);
    },
    update(IdProducto, producto) {
      return Producto.update(producto, { where: { IdProducto } });
    },
    remove(IdProducto) {
      return Producto.destroy({ where: { IdProducto } });
    }
};
