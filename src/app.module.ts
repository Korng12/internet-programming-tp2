import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Receipt } from './modules/receipts/receipt.entity';
import { ReceiptsModule } from './modules/receipts/receipts.module';
import { OrderModule } from './modules/orders/order.module';
import { Order } from './modules/orders/order.entiity';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal:true
    }),
    OrderModule,
    ReceiptsModule,
    OrderModule,
    TypeOrmModule.forRoot({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: '123321',
              database: 'test',
              entities: [Receipt,Order],
              synchronize: true,
          })
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) // The middleware to apply
      .forRoutes('receipts');     // The routes to apply it to
  }
}