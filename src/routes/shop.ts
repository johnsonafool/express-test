import express from 'express';

import { products } from './admin';

const router = express.Router();

router.get('/', (_req, res, _next) => {
  // const { products } = adminData;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export default router;
