import type { Request, Response } from 'express';
import express from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.listen(3000, () => {
  console.log('Application started on port 3000!');
});
