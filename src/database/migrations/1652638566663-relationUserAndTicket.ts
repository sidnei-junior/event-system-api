import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class relationUserAndTicket1652638566663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'tickets',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: "users",
              onDelete: "CASCADE"
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tickets', 'user_id');
    }

}
