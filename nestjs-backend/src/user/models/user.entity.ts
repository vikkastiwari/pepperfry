import { Entity, BeforeInsert,PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({unique: true})
    email: string;

    @Column()
    phone: number;

    @Column({select: false})
    password: string;

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
}