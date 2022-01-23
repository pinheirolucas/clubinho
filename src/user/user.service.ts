import { Injectable } from '@nestjs/common';

export interface User {
  id: string;
  email: string;
  password: string;
  scopes: string[];
}

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 'U001',
      email: 'pinheirolucas@pinheirolucas.com',
      password: 'qqq111',
      scopes: ['cms/write'],
    },
    {
      id: 'U002',
      email: 'ana@ana.com',
      password: 'www222',
      scopes: ['cms/write'],
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
