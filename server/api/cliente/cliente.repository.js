const Cliente = require('./cliente.model');

module.exports = {
      get(query) {
        const PAGE = parseInt(query.page);
        const ELEMENTS_BY_PAGE = parseInt(query.size);
        let TOTAL_ENTITIES = 0;

        return Cliente.count().then((number) => {
            TOTAL_ENTITIES = number;
            const SKIP_ENTITIES = PAGE * ELEMENTS_BY_PAGE;
            return Cliente.findAll({ offset: SKIP_ENTITIES, limit: ELEMENTS_BY_PAGE});
          })
          .then((cliente) => { return {totalCount: TOTAL_ENTITIES, cliente}});
    },
    getById(IdCliente) {
      return Cliente.findById(IdCliente);
    },
    add(cliente) {
      return Cliente.create(cliente);
    },
    update(IdCliente, cliente) {
      return Cliente.update(cliente, { where: { IdCliente } });
    },
    remove(IdCliente) {
      return Cliente.destroy({ where: { IdCliente } });
    }
};
