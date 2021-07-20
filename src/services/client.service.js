import repository from '../repositories/client.repository.js';

export default {
    findAll: () => repository.getAll()
}
