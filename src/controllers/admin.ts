import type { NextFunction, Request, Response } from 'express';

import { Product } from '../model/product';

export const getAddProduct = (_req: Request, res: Response, _next: NextFunction) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

// TODO add type for req.body
export const postAddProduct = (req: Request<any>, res: Response, _next: NextFunction) => {
  // const { title, imageUrl, price, description } = req.body;
  const product = new Product(req.body);
  product.save();
  res.redirect('/');
};

export const getProducts = (_req: Request, res: Response, _next: NextFunction) => {
  Product.fetchAll((products: any) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};
