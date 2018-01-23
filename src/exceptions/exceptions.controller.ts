import { BadRequestException, Controller, Get, HttpCode, Param } from "@nestjs/common";
import { BlackCatsServicePipe } from "../pipes/black-cats-service.pipe";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";

@ApiUseTags('exceptions')
@Controller('exceptions')
export class ExceptionsController {
    constructor() {
    }

    @Get('caughtException')
    @ApiResponse({ status: 400, description: 'Bad request.'})
    async caughtException() {
        throw new BadRequestException();
    }

    @Get('uncaughtException')
    @ApiResponse({ status: 500, description: 'Something fishy is happening.'})
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
