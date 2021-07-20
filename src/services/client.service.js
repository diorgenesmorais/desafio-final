import repository from '../repositories/client.repository.js';

export default {
    findAll: () => repository.getAll(),
    findById: (id) => repository.getById(id)
}
