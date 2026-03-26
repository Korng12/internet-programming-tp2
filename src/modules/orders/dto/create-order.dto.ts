import { IsNumber, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  price: number;

//   @IsDateString()
//   @IsNotEmpty()
//   order_date: string;
}