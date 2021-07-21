import repository from '../repositories/client.repository.js';

export default {
    findAll: async () => repository.getAll(),
    findById: async (id) => repository.getById(id),
    save: async (entity) => repository.create(entity)
}
