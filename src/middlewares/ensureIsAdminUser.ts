import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/repositories/UserRepository';

interface IPayload {
  sub: string;
}

export async function ensureIsAdminUser(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');
  let user_id = ''
  try {
    const { sub } = verify(token, 'cf1aaac4c997f0083c20268ae6d108fd') as IPayload;
    user_id = sub
  } catch (error) {
    throw new AppError('Invalid Token!', 401);
  }



  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(user_id);

  if (!user) {
    throw new AppError('User does not exists!', 401);
  }

  if (!user.is_admin) {
    throw new AppError('User does not admin!', 401);
  }

  request.user = {
    id: user_id,
  };
  next();
}
