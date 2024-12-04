import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Cat } from '../cats.schema';

export class CatRequestDTO extends PickType(Cat, [
  'name',
  'email',
  'password',
] as const) {}
