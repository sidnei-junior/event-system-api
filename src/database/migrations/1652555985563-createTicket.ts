import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createTicket1652555985563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'tickets',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                },
                {
                  name: 'number',
                  type: 'int'
                },
                {
                  name: 'category',
                  type: 'varchar'
                },
                {
                  name: 'sale_at',
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
        await queryRunner.dropTable('tickets');
    }

}
