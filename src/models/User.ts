import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { FavoriteBook } from "./FavoriteBook"
import { Loan } from "./Loan"

@Entity('users')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'email' })
    email!: string
    
    @Column({ name: 'name' })
    name!: string

    @Column({ name: 'password' })
    password!: string

    // @Column({ name: 'role_id' }) // otra forma de recuperar el ID 
    // roleId!: string

    @Column({ name: 'created_at' })
    createdAt!: Date

    @Column({ name: 'updated_at' })
    updatedAt!: Date

    @Column({ name: 'is_active' })
    isActive!: boolean

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" })
    role!: Role;

    @OneToMany(() => FavoriteBook, (favorite_book) => favorite_book.user)
    favorite_books!: FavoriteBook[];

    @OneToMany(() => Loan, (loan) => loan.user)
    loans!: Loan[];

}
