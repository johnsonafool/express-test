import bodyParser from 'body-parser';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import path from 'path';

import adminRoutes from './routes/admin'; // TODO convert import to absolute path
import shopRoutes from './routes/shop'; // TODO convert import to absolute path

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// middleware
app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {});
