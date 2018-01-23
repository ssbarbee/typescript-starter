import { BadRequestException, Controller, Get } from "@nestjs/common";

@Controller('exceptions')
export class ExceptionsController {
    constructor() {
    }

    @Get('caughtException')
    async caughtException() {
        throw new BadRequestException();
    }

    @Get('uncaughtException')
    async uncaughtException() {
        let i = {} as any;
        i.set(3);
    }

}
