import { validation } from './validator.utils.js';
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
            validation(req);
            const result = await service.findById(req.params.id);
            const statusCode = result ? 200 : 404;
            const responseBody = result ? result : { message: 'not found by id' };
            res.status(statusCode).send(responseBody);
        } catch (error) {
            next(error);
        }
    }
}