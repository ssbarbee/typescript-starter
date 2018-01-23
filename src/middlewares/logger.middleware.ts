import { ExpressMiddleware, Middleware, NestMiddleware } from '@nestjs/common';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {
    resolve(name: string): ExpressMiddleware {
        return (req, res, next) => {
            console.log(`Requesting ${req.url}:`);
            console.log('Headers: ', req.headers);
            console.log('Body: ', req.body);
            console.log('Query: ', req.query);
            console.log('Params: ', req.params);
            next();
        };
    }
}
