import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Receipt{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    price:number;
    @Column({ type: 'timestamptz' }) // Includes timezone (Postgres)
    issuedAt:Date

}