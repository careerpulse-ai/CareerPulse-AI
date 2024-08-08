import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { User } from "./User";

@Entity({name:'organisations'})
export class Organisation {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    display_name: string;
  
    @Column({ nullable: false })
    email: string;
  
    @Column({ nullable: false })
    city: string;

    @Column({ nullable: false })
    state: string;
  
    @Column({ nullable: false })
    phone: string;
  
    @Column({ nullable: false })
    employees_count: string;

    @OneToMany(() => User, user => user.organisation,{ eager: true })
    users: User[];

    @CreateDateColumn()
    created_on: Date;
  
    @UpdateDateColumn()
    updated_on: Date;
  }
