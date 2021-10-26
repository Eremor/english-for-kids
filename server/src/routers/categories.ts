import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import * as storage from './../storage/fs';

const router = Router();

router.get('/', async (req, res, next) => {
  const list = await storage.getAllCategories();

  res.json(list);
});

router.get('/:id', async (req, res, next) => {
  const item = await storage.getById(req.params['id']);

  res
    .status(item ? 200 : 404)
    .json(item);
});

router.post('/', async (req, res, next) => {
  const id = uuid();
  const { body } = req;
  body.id = id;

  const newBody = await storage.createCategory(body);

  res.json(newBody);
});

router.put('/:id', async (req, res, next) => {
  const { body } = req;

  const newBody = await storage.updateCategory({
    ...body,
    id: req.params['id']
  });

  res.json(newBody);
});

router.delete('/:id', async (req, res, next) => {
  await storage.removeCategory(req.params['id']);

  res
    .status(204)
    .json(null);
});

export default router;
