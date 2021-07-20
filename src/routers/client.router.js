import express from 'express';
import validator from 'express-validator';
import controller from '../controllers/client.controller.js';

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', validator.check('id', 'deve ser informado um número').isNumeric(), controller.getById);

export default router;
