import { CatsRepository } from './../cats/cats.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly CatsRepository: CatsRepository) {}

  async jwtLogin(data: LoginRequestDto) {}
}
