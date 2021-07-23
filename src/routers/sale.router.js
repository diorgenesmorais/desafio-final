import express from 'express';
import validator from 'express-validator';
import controller from '../controllers/sale.controller.js';

const router = express.Router();

router.get('/', controller.list);
router.get(
    '/:id',
    validator.check('id', 'deve ser informado um número').isNumeric(),
    controller.getById
);
router.post(
    '/',
    validator.body('data', 'O campo data é obrigatório').isString(),
    validator.body('cliente_id', 'O campo cliente_id é obrigatório').exists(),
    validator.body('livro_id', 'O campo livro_id é obrigatório').exists(),
    controller.create
);
router.delete('/:id', controller.destroy);
router.put('/', controller.update);

export default router;
