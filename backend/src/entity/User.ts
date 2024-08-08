import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, OneToOne, ManyToOne } from "typeorm"
import { Organisation } from "./Organisation";
import { Role } from "./Roles";

@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ nullable: false })
    first_name: string;

    @Column({ nullable: false })
    last_name: string;

    @Column({ nullable: false })
    gender: string;
  
    @Column({ nullable: false })
    email: string;
  
    @Column({ nullable: false })
    password: string;

    @ManyToOne(() => Organisation)
    @JoinColumn({name:'org_id'})
    organisation: Organisation ;
  
    @OneToOne(() => Role)
    @JoinColumn({name : 'role_id'})
    role: Role;
  
    @CreateDateColumn()
    created_on: Date;
  
    @UpdateDateColumn()
    updated_on: Date;
  }
