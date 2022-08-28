const express = require('express');

const CategoriesService = require('../services/category.service');

const router = express.Router();

const service = new CategoriesService();

// router.get('/', (req, res) => {
//   res.json([
//     {
//       category: 'Moda',
//       subcategory: 'bebes',
//       seccion: '0-12 meses',
//     },
//     {
//       category: 'Home',
//       subcategory: 'Decoración',
//       seccion: 'Sala-Comedor',
//     },
//     {
//       category: 'Arte',
//       subcategory: 'dibujo',
//       seccion: 'Pinceles',
//     },
//   ]);
// });
router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  res.json(category);
});

//Get params

// router.get('/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({ categoryId, productId });
// });

router.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.status(201).json(newCategory);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body);
  res.json(category);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
