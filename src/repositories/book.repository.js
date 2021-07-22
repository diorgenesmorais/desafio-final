import Livro from '../model/book.model.js';
import Autor from '../model/author.model.js';

export default {
    getAll: async () => {
        try {
            return await Livro.findAll({
                include: [
                    {
                        model: Autor
                    }
                ]
            });
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            return await Livro.findOne({
                include: [
                    {
                        model: Autor
                    }
                ],
                where: {
                    id
                }
            });
        } catch (error) {
            throw error;
        }
    },
    create: async (entity) => {
        try {
            return await Livro.create(entity);
        } catch (error) {
            throw error;
        }
    },
    destroy: async (id) => {
        try {
            return await Livro.destroy({
                where: {
                    id
                }
            });
        } catch (error) {
            throw error;
        }
    },
    update: async (entity) => {
        // append RETURNING in Postgres
        const { valor, estoque } = entity;
        try {
            const [ , result] = await Livro.update({ valor, estoque }, {
                where: {
                    id: entity.id
                },
                returning: true
            });
            return result[0].dataValues;
        } catch (error) {
            throw error;
        }
    },
    filter: async (foreignKey) => {
        try {
            return await Livro.findAll({
                include: [
                    {
                        model: Autor
                    }
                ],
                where: {
                    autor_id: foreignKey
                }
            });
        } catch (error) {
            throw error;
        }
    }
}
