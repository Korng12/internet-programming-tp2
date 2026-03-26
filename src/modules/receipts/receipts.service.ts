import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Receipt} from "./receipt.entity";
import { Repository } from "typeorm";
import { CreateReceiptDto } from "./dto/create-receipt.dto";
import { UpdateReceiptDto } from "./dto/update-receipt.dto";

@Injectable()
export class RecieptsService{
    constructor(@InjectRepository(Receipt) private receiptRepo:Repository<Receipt>){}
    findAll(){
        return this.receiptRepo.find({order:{issuedAt:'DESC'}})
    }
    async findOne(receiptId:number){
        const receipt =await this.receiptRepo.findOne({where:{id:receiptId}});
        if(!receipt){
            throw new NotFoundException
        }
        return receipt;
    }
    create(dto:CreateReceiptDto){
        const receipt =this.receiptRepo.create({
            issuedAt: new Date(dto.issuedAt),
            name:dto.name,
            price: dto.price,
            order:{id:dto.orderId}
        })
        return this.receiptRepo.save(receipt);
    }
    async update(receiptId:number, dto: UpdateReceiptDto) {
        const receipt = await this.receiptRepo.findOne({where:{id:receiptId}})
        if(!receipt){
            throw new NotFoundException("Receipt not found");
        }
        if (dto.issuedAt !== undefined) receipt.issuedAt = new Date(dto.issuedAt);
        if (dto.name !== undefined) receipt.name = dto.name;
        if (dto.price !== undefined) receipt.price = dto.price;

        return this.receiptRepo.save(receipt);
    }
 
    async delete(receiptId:number){
        const receipt=await this.receiptRepo.findOne({where:{id:receiptId}});
        if(!receipt){
            throw new NotFoundException(`Receipt with this id${receiptId} not found `)
        }
        await this.receiptRepo.remove(receipt);
        return {deleted:true,receiptId};
    }

    
}