import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // req.middleware='sayhello';
    console.log(`Request middleware... ${req.method} ${req.url} ${req.headers['x-api-key']}`);
    next(); // Don't forget to call next()!
  }
}
