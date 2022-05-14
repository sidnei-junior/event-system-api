import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createEvent1652555928997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'events',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                },
                {
                  name: 'name',
                  type: 'varchar'
                },
                {
                  name: 'locality',
                  type: 'varchar'
                },
                {
                  name: 'happens_at',
                  type: 'timestamp',
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('events');
    }

}
