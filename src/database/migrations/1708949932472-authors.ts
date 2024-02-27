import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Authors1708949932472 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "authors",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "nationality",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()",
                        isNullable: false,
                    },
                ],
            }),
            true
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
