import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log(context.getHandler())
    const req = context.switchToHttp().getRequest<Request & { headers: any }>();
    // console.log(req)
    // console.log(context.switchToHttp().getRequest().headers)
    // console.log(context.switchToHttp().getResponse())
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.API_KEY) {
      throw new UnauthorizedException('Invalid API key');
    }
    return true;
  }
}