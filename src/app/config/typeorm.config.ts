import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Tag } from './../entities';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Tag],
  migrations: ['dist/migrations/*.js'],
  migrationsRun: true,
});

AppDataSource.initialize();
