import { Controller, Post } from "@nestjs/common";

@Controller('orders')
export class OrderController{
    @Post()
    create(){
        return {sth:"hello world"}
    }
}