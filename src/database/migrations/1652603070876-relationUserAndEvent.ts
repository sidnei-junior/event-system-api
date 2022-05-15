import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class relationUserAndEvent1652603070876 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
          'events',
          new TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: "users",
            onDelete: "CASCADE"
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('events', 'user_id');
    }

}
