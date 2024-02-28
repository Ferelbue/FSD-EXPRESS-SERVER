import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";
import { Book } from "./Book";

@Entity('favourite_books')
export class FavouriteBook extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    // @ManyToOne(() => User, (user) => user.favourite_books)
    // @JoinColumn({ name: "user_id" })
    // user!: User;

    // @ManyToOne(() => Book, (book) => book.favourite_books)
    // @JoinColumn({ name: "book_id" })
    // book!: Book;
}
