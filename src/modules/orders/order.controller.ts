import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";

@Controller('orders')
export class OrderController{
    constructor(private orderService :OrderService ){}
    @Get()
    findAll(){
        return this.orderService.findAll()
    }
    @Post()
    create(@Body() dto:CreateOrderDto){
        return this.orderService.create(dto)
    }
}