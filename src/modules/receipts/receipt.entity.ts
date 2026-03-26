import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../orders/order.entiity";

@Entity()
export class Receipt{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    price:number;
    @Column() // Includes timezone (Postgres)
    issuedAt:Date
    @OneToOne(()=>Order,(order)=>order.receipt)
    @JoinColumn()
    order:Order;

}