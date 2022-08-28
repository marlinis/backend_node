const express = require('express'); //se trae para modificar las ritas con /api/v1/

const productsRouter = require('./products.router');
const userRouter = require('./users.router');
const categoryRouter = require('./categories.router');



function routerApi(app) {
  //app.use('/api/products', productsRouter);
  //app.use('/api/users', userRouter);
  //app.use('/api/categories', categoryRouter);

  //Otra forma de solucionar api/v1 versiones si se tienen muchas rutas sera complejo.
  //app.use('/api/v1/products', productsRouter);
  //app.use('/api/v1/users', userRouter);
  //app.use('/api/v1/categories', categoryRouter);

  // la mejor forma de hacerlo
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoryRouter);
}

module.exports = routerApi;
