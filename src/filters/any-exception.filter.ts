import { Catch, ExceptionFilter } from "@nestjs/common";

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
    catch(exception, response) {
        response.status(500).json({
            statusCode: 500,
            exception: exception,
            message: `It's a message from the AnyExceptionFilter`,
        });
    }
}