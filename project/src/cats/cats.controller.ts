import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/common/http-exception.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //cats
  @Get()
  getAllCat() {
    // throw new HttpException('api is broken', 401);
    return 'get all cat';
  }
  // cats/:id
  @Get('id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }
  @Put(':id')
  updateCat() {
    return 'update cat';
  }
  @Patch(':id')
  updatePartialCat() {
    return;
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
