import { IsDateString, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateReceiptDto {
 
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsDateString()
  issuedAt:Date;
  @IsNumber()
  @Min(0)
  price: number;
  @IsNumber()
  orderId:number
}