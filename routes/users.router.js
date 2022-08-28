const express = require('express');

const UsersService = require('../services/user.service');

const router = express.Router();

const service = new UsersService();

router.get('/users1', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('No hay parametros');
  }
});

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

// router.get('/people', (req, res) => {
//   res.json([
//     {
//       name: 'Arturo',
//       type: 'employee',
//     },
//     {
//       name: 'Jimena',
//       type: 'customer',
//     },
//   ]);
// });

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json(user);
});

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   res.json({
//     message: 'Update',
//     data: body,
//     id,
//   });
// });

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
