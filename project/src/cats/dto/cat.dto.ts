import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class readonlyCatDTO extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '30330303030303',
    description: 'id',
  })
  id: string;
}
