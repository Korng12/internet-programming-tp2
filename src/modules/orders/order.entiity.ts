import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Receipt } from "../receipts/receipt.entity";

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:false})
    price:number;
    @Column({type:'date',default:()=>"CURRENT_TIMESTAMP"})
    order_date:Date;
    @OneToOne(()=>Receipt,(receipt)=>receipt.order)
    receipt:Receipt;
}