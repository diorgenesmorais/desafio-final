import Cliente from '../model/client.model.js';

export default {
    getAll: async () => {
        try {
            return await Cliente.findAll({
                attributes: ['id', 'nome', 'email', 'telefone', 'endereco']
            });
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            return await Cliente.findOne({
                attributes: ['id', 'nome', 'email', 'telefone', 'endereco'],
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
            return await Cliente.create(entity);
        } catch (error) {
            throw error;
        }
    },
    destroy: async (id) => {
        try {
            return await Cliente.destroy({
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
            const [ , result] = await Cliente.update(entity, {
                where: {
                    id: entity.id
                },
                returning: ['id', 'nome', 'email', 'telefone', 'endereco']
            });
            return result[0].dataValues;
        } catch (error) {
            throw error;
        }
    }
}
