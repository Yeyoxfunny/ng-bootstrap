const Factura = require('./factura.model');
const Cliente = require('../cliente/cliente.model');
module.exports = {
      get(query) {
        const PAGE = parseInt(query.page);
        const ELEMENTS_BY_PAGE = parseInt(query.size);
        let TOTAL_ENTITIES = 0;

        return Factura.count().then((number) => {
            TOTAL_ENTITIES = number;
            const SKIP_ENTITIES = PAGE * ELEMENTS_BY_PAGE;
            return Factura.findAll({ offset: SKIP_ENTITIES, limit: ELEMENTS_BY_PAGE, include:["cliente"]});
          })
          .then((factura) => { return {totalCount: TOTAL_ENTITIES, factura}});
    },
    getById(IdFactura) {
      return Factura.findById(IdFactura,{ include: ["cliente"]});
    },
    add(factura) {
      return Factura.create(factura);
    },
    update(IdFactura, factura) {
      return Factura.update(factura, { where: { IdFactura } });
    },
    remove(IdFactura) {
      return Factura.destroy({ where: { IdFactura } });
    }
};
