import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./order.entiity";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { NotFoundError } from "rxjs";

@Injectable()
export class OrderService{
    constructor(@InjectRepository(Order) private orderRepo:Repository<Order>){}
    findAll(){
        return this.orderRepo.find()
    }
    create( dto:CreateOrderDto){
        // convert dto to order object first
        const order =this.orderRepo.create({
            price:dto.price
            // order_date:dto.order_date,
        })
        return this.orderRepo.save(order)
    }
    // update(orderId:number,dto)
    async delete(orderId:number){
        const order =await this.orderRepo.findOne({where:{id:orderId}})
        if(!order){
            throw new NotFoundException("Not found")
        }
        await this.orderRepo.remove(order);
        return {delete:true,orderId};
    }
}