import service from '../services/client.service.js';

export default {
    list: async (req, res, next) => {
        try {
            const result = await service.findAll();
            res.send(result);
        } catch (error) {
            next(error);
        }
    },
    getById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await service.findById(id);
            const statusCode = result ? 200 : 404;
            const responseBody = result ? result : { message: `not found by id ${id}` };
            res.status(statusCode).send(responseBody);
        } catch (error) {
            next(error);
        }
    }
}