import Cliente from '../model/client.model.js';

export default {
    getAll: () => {
        try {
            return Cliente.findAll();
        } catch (error) {
            throw error;
        }
    }
}
