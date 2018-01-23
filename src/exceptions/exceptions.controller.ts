import { BadRequestException, Controller, Get, HttpCode, Param } from "@nestjs/common";
import { BlackCatsServicePipe } from "../pipes/black-cats-service.pipe";

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

    @Get(':catId')
    @HttpCode(200)
    async blackCats(@Param('catId', new BlackCatsServicePipe()) catId,)  {
        return `Hello ${catId}. You are matching cat.`;
    }
}
