import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { PostgresInstanceConfig } from './database.config';
import { Tag } from '@app/entities';
@Injectable()
export class TypeOrmConfigServiceForPostgres implements TypeOrmOptionsFactory {
  constructor() { }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    // console.log(PostgresInstanceConfig())
    return {
      ...PostgresInstanceConfig(),
    };
  }
}
// console.log(PostgresInstanceConfig())