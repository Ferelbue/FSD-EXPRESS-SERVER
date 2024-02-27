import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Loans1708951036421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "loans",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "book_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "loan_date",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()",
                        isNullable: false,
                    },
                    {
                        name: "due_date",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()",
                        isNullable: false,
                    },
                    {
                        name: "return_date",
                        type: "timestamp",
                        onUpdate: "now()",
                        isNullable: false,
                    },

                ],
                foreignKeys: [
                    {
                        columnNames: ["book_id"],
                        referencedTableName: "books",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            }),
            true
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
