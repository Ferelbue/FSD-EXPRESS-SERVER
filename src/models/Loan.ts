import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";
import { Book } from "./Book";

@Entity('loans')
export class Loan extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'loan_date' })
    loanDate!: Date

    @Column({ name: 'due_date' })
    dueDate!: Date

    @Column({ name: 'return_date' })
    returnDate!: Date

    // @ManyToOne(() => User, (user) => user.loans)
    // @JoinColumn({ name: "user_id" })
    // user!: User;

    // @ManyToOne(() => Book, (book) => book.loans)
    // @JoinColumn({ name: "book_id" })
    // book!: Book;

}
