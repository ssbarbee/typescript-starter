import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, response) {
        const status = exception.getStatus();
        const exceptionResponse = exception.getResponse();
        response.status(status).json({
            statusCode: status,
            message: `It's a message from the exception filter`,
            exceptionResponse
        });
    }
}
