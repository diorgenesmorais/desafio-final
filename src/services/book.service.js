import repository from '../repositories/book.repository.js';

export default {
    findAll: async () => repository.getAll(),
    findById: async (id) => repository.getById(id),
    save: async (entity) => repository.create(entity),
    destroy: async (id) => repository.destroy(id),
    update: async (entity) => repository.update(entity),
    filter: async (foreignKey) => repository.filter(foreignKey)
}
