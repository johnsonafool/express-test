import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  //   res.sendFile('src/views/shop.html');
});

export default router;
