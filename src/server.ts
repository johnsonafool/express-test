import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import { getError } from './controllers/errors';
import { adminRoutes } from './routes/admin'; // TODO convert import to absolute path
import { shopRoutes } from './routes/shop';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join('public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(getError);

app.listen(3000, () => {});
