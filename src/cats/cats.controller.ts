import { Controller, Get, HttpCode, Param, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'this action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action return all cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
