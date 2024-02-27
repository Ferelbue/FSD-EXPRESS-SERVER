import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Book } from "./Book"

@Entity('authors')
export class Author extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name' })
    name!: string

    @Column({ name: 'nationality' })
    nationality!: string

    @Column({ name: 'created_at' })
    createdAt!: Date

    @Column({ name: 'updated_at' })
    updatedAt!: Date

    @OneToMany(() => Book, (book) => book.author)
    books!: Book[];

}
