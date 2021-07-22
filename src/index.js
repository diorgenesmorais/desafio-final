import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './register.logger.js';
import clientRouter from '../src/routers/client.router.js';
import authorRouter from '../src/routers/author.router.js';

dotenv.config();
global.logger = logger;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/clientes', clientRouter);
app.use('/autores', authorRouter);

app.get('/', (req, res, next) => {
    res.status(200).send('Welcome!');
});

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.originalUrl} - ${err.message}`);
    const statusCode = req.statusCode ? req.statusCode : 500;
    res.status(statusCode).send({ error: err.message });
});

app.listen(process.env.PORT, () => console.log(`API started in ${process.env.PORT}`));