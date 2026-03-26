import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;
    req.userName="Hello world"
    const start = Date.now();
    // from this, run after controller
    return next.handle().pipe(
      tap(() => {
        const ms = Date.now() - start;
        console.log(`[HTTP] ${method} ${url} - ${ms}ms`);
      }),
    );
  }
}