import repository from '../repositories/sale.repository.js';
import bookRepository from '../repositories/book.repository.js';

export default {
    findAll: async () => repository.getAll(),
    findById: async (id) => repository.getById(id),
    save: async (entity) => {
        const book = await bookRepository.getById(entity.livro_id);
        return await repository.create({...entity, valor: book.valor});
    },
    byClient: async (foreignKey) => repository.byClient(foreignKey),
    byBook: async (foreignKey) => repository.byBook(foreignKey),
    byAuthor: async (foreignKey) => repository.byAuthor(foreignKey)
}
