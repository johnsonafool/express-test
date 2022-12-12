import bodyParser from 'body-parser';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import path from 'path';

import { routes } from './routes/admin'; // TODO convert import to absolute path
import shopRoutes from './routes/shop';
import rootDir from './utils/path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));

// use static files
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', routes);
app.use(shopRoutes);

// middleware
app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000, () => {});
