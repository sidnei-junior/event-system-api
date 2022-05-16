import { MigrationInterface, QueryRunner } from "typeorm";

export default class AlterEventAndTicket1652657982639 implements MigrationInterface {
    name = 'AlterEventAndTicket1652657982639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" ADD "eventId" character varying`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_8a101375d173c39a7c1d02c9d7d" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_8a101375d173c39a7c1d02c9d7d"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP COLUMN "eventId"`);
    }

}
