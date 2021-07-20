import express from 'express';
import controller from '../controllers/client.controller.js';

const router = express.Router();

router.get('/', controller.list);

export default router;