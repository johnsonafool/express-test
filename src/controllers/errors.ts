import type { NextFunction, Request, Response } from 'express';

export const getError = (_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};
