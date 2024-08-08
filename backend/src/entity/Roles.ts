import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({name:'roles'})
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: false })
    name: string;

    @CreateDateColumn()
    created_on: Date;
  
    @UpdateDateColumn()
    updated_on: Date;
  }
