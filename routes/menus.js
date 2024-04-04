import express from 'express';
const router = express.Router();

import dessertsRouter from './desserts.js';

router.get('/', (req, res) => {
  res.send('This is the menus endpoint');
});

router.use('/desserts', dessertsRouter);


export default router;

