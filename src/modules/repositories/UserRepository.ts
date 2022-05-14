import { Repository } from "typeorm";
import AppDataSource from "../../database";
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';
import { IUsersRepository } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }


  async create({
    username, password, email, id,
  }: ICreateUserDTO): Promise<void> {

    const user = this.repository.create({
      username,
      password,
      email,
      id
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email
      }
    });
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        username
      }
    });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        id
      }
    });
    return user;
  }
}

export { UsersRepository };
