import type { NextFunction, Request, Response } from 'express';

import { Product } from '../model/product';

//
// controllers
//
export const getProducts = (_req: Request, res: Response, _next: NextFunction) => {
  // don't need to value to Product, since fetchAll() is a static method
  Product.fetchAll((products: any) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

export const getIndex = (_req: Request, res: Response, _next: NextFunction) => {
  Product.fetchAll((products: any) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

export const getCart = (_req: Request, res: Response, _next: NextFunction) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
};

export const getOrders = (_req: Request, res: Response, _next: NextFunction) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
};

export const getCheckout = (_req: Request, res: Response, _next: NextFunction) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
};
