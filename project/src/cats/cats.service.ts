import { CatsRepository } from './cats.repository';
import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Cat } from './cats.schema';
import { CatRequestDTO } from './dto/cats.request.dto';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  async signUp(body: CatRequestDTO) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existsByEmail(email);

    //유효성 검사
    if (isCatExist) {
      throw new UnauthorizedException('해당하는 고양이가 이미 있습니다');
      //   throw new HttpException('해당하는 고양이가 이미 있습니다', 403);
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }
}
