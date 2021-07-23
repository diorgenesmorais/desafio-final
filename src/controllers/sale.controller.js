import { validation } from './validator.utils.js';
import service from '../services/sale.service.js';

export default {
    list: async (req, res, next) => {
        try {
            const { clienteId, livroId, autorId } = req.query;
            if (clienteId) {
                return res.send(await service.byClient(clienteId));
            }
            if (livroId) {
                return res.send(await service.byBook(livroId));
            }
            if (autorId) {
                return res.send(await service.byAuthor(autorId));
            }

            res.send(await service.findAll());
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
    },
    create: async (req, res, next) => {
        try {
            validation(req);
            const result = await service.save(req.body);
            const statusCode = result ? 201 : 404;
            const responseBody = result ? result : { message: 'not found' };
            res.status(statusCode).send(responseBody);
        } catch (error) {
            // o erro foi lançado do repositório
            if (error.name === 'SequelizeValidationError') {
                req.statusCode = 400;
            }
            next(error);
        }
    },
    destroy: async (req, res, next) => {
        try {
            const result = await service.destroy(req.params.id);
            const statusCode = result ? 204 : 404;
            res.status(statusCode).end();
        } catch (error) {
            if (error.name === 'SequelizeForeignKeyConstraintError') {
                req.statusCode = 400;
            }
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const result = await service.update(req.body);
            const statusCode = result ? 200 : 400;
            const responseBody = result ? result : { message: 'bad request' };
            res.status(statusCode).send(responseBody);
        } catch (error) {
            // o erro foi lançado do repositório
            if (error.name === 'SequelizeValidationError') {
                req.statusCode = 400;
            }
            next(error);
        }
    }
}
