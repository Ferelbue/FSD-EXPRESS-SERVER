import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";
import { Book } from "./Book";

@Entity('favorite_books')
export class FavoriteBook extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    // @ManyToOne(() => User, (user) => user.favorite_books)
    // @JoinColumn({ name: "user_id" })
    // user!: User;

    // @ManyToOne(() => Book, (book) => book.favorite_books)
    // @JoinColumn({ name: "book_id" })
    // book!: Book;
}
