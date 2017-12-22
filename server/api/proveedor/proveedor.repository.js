const Proveedor = require('./proveedor.model');

module.exports = {
      get(query) {
        const PAGE = parseInt(query.page);
        const ELEMENTS_BY_PAGE = parseInt(query.size);
        let TOTAL_ENTITIES = 0;

        return Proveedor.count().then((number) => {
            TOTAL_ENTITIES = number;
            const SKIP_ENTITIES = PAGE * ELEMENTS_BY_PAGE;
            return Proveedor.findAll({ offset: SKIP_ENTITIES, limit: ELEMENTS_BY_PAGE});
          })
          .then((proveedor) => { return {totalCount: TOTAL_ENTITIES, proveedor}});
    },
    getById(IdProveedor) {
      return Proveedor.findById(IdProveedor);
    },
    add(proveedor) {
      return Proveedor.create(proveedor);
    },
    update(IdProveedor, proveedor) {
      return Proveedor.update(proveedor, { where: { IdProveedor } });
    },
    remove(IdProveedor) {
      return Proveedor.destroy({ where: { IdProveedor } });
    }
};
