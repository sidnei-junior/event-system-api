import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class relationEventAndTicket1652655415349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'tickets',
            new TableForeignKey({
              columnNames: ['event_id'],
              referencedColumnNames: ['id'],
              referencedTableName: "events",
              onDelete: "CASCADE"
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tickets', 'event_id');
    }

}
