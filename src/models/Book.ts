import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./Author"
import { FavoriteBook } from "./FavoriteBook"
import { Loan } from "./Loan"

@Entity('books')
export class Book extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'title' })
    title!: string

    @Column({ name: 'genre' })
    genre!: string

    @Column({ name: 'updated_at' })
    updatedAt!: Date

    @ManyToOne(() => Author, (author) => author.books)
    @JoinColumn({ name: "author_id" })
    author!: Author;

    @OneToMany(() => FavoriteBook, (favorite_book) => favorite_book.book)
    favorite_books!: FavoriteBook[];

    @OneToMany(() => Loan, (loan) => loan.book)
    loans!: Loan[];

}
