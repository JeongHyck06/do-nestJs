import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name')
  getHello(@Req() req: Request, @Body() body, @Param() param): string {
    console.log(req);
    console.log(param);
    return this.appService.getHello();
  }
}
