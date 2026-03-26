import { Module } from "@nestjs/common";
import { ReceiptsController } from "./receipts.controller";
import { RecieptsService } from "./receipts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Receipt} from "./receipt.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Receipt])],
    controllers:[ReceiptsController],
    providers:[RecieptsService]
})
export class ReceiptsModule{}