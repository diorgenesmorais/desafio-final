import Cliente from '../model/client.model.js';

export default {
    getAll: async () => {
        try {
            return await Cliente.findAll();
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            return await Cliente.findByPk(id);
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
    }
}
