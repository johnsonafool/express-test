import type { NextFunction, Request, Response } from 'express';
import express from 'express';

const router = express.Router();

const products: any = [];

// /admin/add-product => GET
router.get('/add-product', (req: Request, res: Response, _next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// /admin/add-product => POST
router.post('/add-product', (req: Request, res: Response, _next: NextFunction) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

export { products, router as routes };
