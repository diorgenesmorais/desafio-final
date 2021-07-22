import express from 'express';
import validator from 'express-validator';
import controller from '../controllers/book.controller.js';

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', validator.check('id', 'deve ser informado um número').isNumeric(), controller.getById);
router.post(
    '/',
    validator.body('nome', 'O nome é obrigatório').exists(),
    validator.body('valor', 'O campo valor é obrigatório').isFloat(),
    validator.body('estoque', 'O campo estoque é obrigatório').isNumeric(),
    validator.body('autor_id', 'O id do autor é obrigatório').isNumeric(),
    controller.create
);
router.delete('/:id', controller.destroy);
router.put('/', controller.update);

export default router;
