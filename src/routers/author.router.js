import express from 'express';
import validator from 'express-validator';
import controller from '../controllers/author.controller.js';

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', validator.check('id', 'deve ser informado um número').isNumeric(), controller.getById);
router.post(
    '/',
    validator.body('nome', 'O nome é obrigatório').exists(),
    validator.body('email', 'O campo email é obrigatório').exists(),
    validator.body('telefone', 'O campo telefone é obrigatório').exists(),
    controller.create
);
router.delete('/:id', controller.destroy);
router.put('/', controller.update);

export default router;
