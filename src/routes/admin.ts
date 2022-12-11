import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/add-product', (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/product', (req: Request, res: Response, _next: NextFunction) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
