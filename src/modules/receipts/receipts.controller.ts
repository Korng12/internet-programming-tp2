import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { RecieptsService } from "./receipts.service";
import { ApiKeyGuard } from "src/common/guards/api-key.gaurd";
import { CreateReceiptDto } from "./dto/create-receipt.dto";
import { UpdateReceiptDto } from "./dto/update-receipt.dto";
import { dot } from "node:test/reporters";
@UseGuards(ApiKeyGuard)
@Controller('receipts')
export class ReceiptsController{
    constructor(private recieptsService:RecieptsService){}
    @Get()
    findAll(){
        console.log(process.env.API_KEY )
        return this.recieptsService.findAll()
    }
    @Post()
    create(@Body() dto:CreateReceiptDto){

        return this.recieptsService.create(dto);
    }
    @Patch(':id')
    update (@Param('id',ParseIntPipe) receiptId:number, @Body() dto:UpdateReceiptDto){
        return this.recieptsService.update(receiptId,dto);
    }
    @Delete(':id')
    delete(@Param('id',ParseIntPipe) receiptId:number){
        return this.recieptsService.delete(receiptId);

    }
}