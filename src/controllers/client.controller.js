import service from '../services/client.service.js';

export default {
    list: async (req, res, next) => {
        try {
            const result = await service.findAll();
            res.send(result);
        } catch (error) {
            next(error);
        }
    }
}