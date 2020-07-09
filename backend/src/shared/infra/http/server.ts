import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import AppError from '@shared/errors/AppError';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const port = 3333;

app.listen(port, () => {
  console.log(`🚀 Server running into port ${port}!`);
});
