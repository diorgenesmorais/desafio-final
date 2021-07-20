import Cliente from '../model/client.model.js';

export default {
    getAll: () => {
        try {
            return Cliente.findAll();
        } catch (error) {
            throw error;
        }
    },
    getById: (id) => {
        try {
            return Cliente.findByPk(id);
        } catch (error) {
            throw error;
        }
    }
}
