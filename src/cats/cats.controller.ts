import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatModel } from './cat.model';
import { CatsService } from './cats.service';
import { ICat } from './cat.entity';
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";

@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    @Post()
    @Put()
    async saveOrUpdate(@Body() createCatDto: CatModel): Promise<ICat> {
        return await this.catsService.saveOrUpdate(createCatDto);
    }

    @Get()
    @ApiResponse({ status: 200, description: 'Returns all your cats'})
    async findAll(): Promise<ICat[]> {
        return await this.catsService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id,): Promise<ICat> {
        return await this.catsService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id,): Promise<ICat[]> {
        return await this.catsService.deleteById(id);
    }
}
