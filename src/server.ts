import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

//import './database';

import { router } from './routes';
import { AppError } from './errors/AppError';
import './database';


const app = express();

app.use(express.json());

app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World 332ssa')
})

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3000, () => console.log('Server is running!'));