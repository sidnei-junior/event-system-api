import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createUser1652313091944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                },
                {
                  name: 'username',
                  type: 'varchar',
                  isUnique: true,
                },
                {
                  name: 'email',
                  type: 'varchar',
                },
                {
                  name: 'password',
                  type: 'varchar',
                },
                {
                  name: 'is_admin',
                  type: 'boolean',
                  default: false,
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
        await queryRunner.dropTable('users');
    }

}
