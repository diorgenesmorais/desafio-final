import Autor from '../model/author.model.js';

export default {
    getAll: async () => {
        try {
            return await Autor.findAll();
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            return await Autor.findOne({
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
            return await Autor.create(entity);
        } catch (error) {
            throw error;
        }
    },
    destroy: async (id) => {
        try {
            return await Autor.destroy({
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
        try {
            const [ , result] = await Autor.update(entity, {
                where: {
                    id: entity.id
                },
                returning: true
            });
            return result[0].dataValues;
        } catch (error) {
            throw error;
        }
    }
}
