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
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}
  async signUp(body: CatRequestDTO) {
    const { email, name, password } = body;
    const isCatExist = await this.catModel.exists({ email });

    //유효성 검사
    if (isCatExist) {
      throw new UnauthorizedException('해당하는 고양이가 이미 있습니다');
      //   throw new HttpException('해당하는 고양이가 이미 있습니다', 403);
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catModel.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }
}
