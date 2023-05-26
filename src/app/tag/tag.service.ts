import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  async fetchAll(): Promise<string[]> {
    return ['title', 'experience'];
  }
}
