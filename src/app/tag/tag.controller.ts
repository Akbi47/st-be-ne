import { Controller, Get } from '@nestjs/common';

@Controller('tag')
// @ApiTags('tag')
export class TagController {
  constructor() { }
  @Get('/tags')
  getAll() {
    return ['title', 'experience'];
  }
}
