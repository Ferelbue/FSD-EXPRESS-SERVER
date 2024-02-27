import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Role } from "./Role"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name' })
    name!: string

    @Column({ name: 'password' })
    password!: string

    @Column({ name: 'email' })
    email!: string

    @Column({ name: 'created_at' })
    createdAt!: Timestamp

    @Column({ name: 'updated_at' })
    updatedAt!: Timestamp

    @Column({ name: 'is_active' })
    isActive!: boolean


    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" })
    role!: Role;

}
