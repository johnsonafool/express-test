import express from 'express';

import { getCart, getCheckout, getIndex, getOrders, getProducts } from '../controllers/shop';

const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

export { router as shopRoutes };
