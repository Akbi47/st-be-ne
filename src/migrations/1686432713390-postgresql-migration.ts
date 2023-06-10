import { MigrationInterface, QueryRunner } from "typeorm";

export class PostgresqlMigration1686432713390 implements MigrationInterface {
    name = 'PostgresqlMigration1686432713390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "bio" character varying(120) DEFAULT '', "avatar_image" character varying DEFAULT '', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
