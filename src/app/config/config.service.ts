import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { PostgresInstanceConfig } from './database.config';
@Injectable()
export class TypeOrmConfigServiceForPostgres implements TypeOrmOptionsFactory {
  constructor() { }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      ...PostgresInstanceConfig(),
    };
  }
}
