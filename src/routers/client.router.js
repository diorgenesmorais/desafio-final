import express from 'express';
import validator from 'express-validator';
import controller from '../controllers/client.controller.js';

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', validator.check('id', 'deve ser informado um número').isNumeric(), controller.getById);
router.post(
    '/',
    validator.body('nome', 'O nome é obrigatório').isString(),
    validator.body('email', 'O campo email é obrigatório').isString(),
    validator.body('senha', 'O campo senha é obrigatória').isString(),
    validator.body('telefone', 'O campo telefone é obrigatório').isString(),
    validator.body('endereco', 'O campo endereço é obrigatório').isString(),
    controller.create
);

export default router;
