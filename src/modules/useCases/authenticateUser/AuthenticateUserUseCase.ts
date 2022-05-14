import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    username:string;
    password: string;
}

interface IResponse {
    user: {
        username: string;
    };
    token: string;
}

class AuthenticateUserUseCase {
  constructor(
        private usersRepository: IUsersRepository,
  ) {}

  makeAuthorizadError() {
    throw new AppError('Username or password incorrect!');
  }

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
      this.makeAuthorizadError();
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      this.makeAuthorizadError();
    }

    const token = sign({}, 'cf1aaac4c997f0083c20268ae6d108fd', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      user: {
        username: user.username,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
