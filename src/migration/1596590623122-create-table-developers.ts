import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableDevelopers1596590623122 implements MigrationInterface {
  name = "createTableDevelopers1596590623122";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "developers" ("id" SERIAL NOT NULL, "nome" character varying(60) NOT NULL, "sexo" character(1) NOT NULL DEFAULT 'M', "idade" integer NOT NULL, "hobby" character varying NOT NULL, "datanascimento" TIMESTAMP NOT NULL, CONSTRAINT "pk_developers" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "developers"`);
  }
}
