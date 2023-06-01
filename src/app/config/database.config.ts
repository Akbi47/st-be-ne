import { Tag } from './../entities';
import { ConfigService } from '@nestjs/config';

export const PostgresInstanceConfig = () => {
  const configService = new ConfigService();
  return {
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    // running migration
    entities: [Tag], // production environment
    synchronize: false, // production environment
    // auto synchronize
    // entities: [__curdirname + '/dist/**/index.js'], // dev environment
    // synchronize: true, // dev environment
  }
}

