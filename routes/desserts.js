import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.send('This is the desserts endpoint');
  });

  router.get('/1', (req, res) => {
    res.send('Dessert 1: Tiramisu');
  });

  router.get('/2', (req, res) => {
    res.send('Dessert 2: Cupcakes');
  });

  export default router;