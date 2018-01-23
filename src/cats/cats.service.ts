import { Component, Inject } from '@nestjs/common';
import { Cat, ICat } from './cat.entity';
import { CatsRepository } from "./cats.providers";

@Component()
export class CatsService {
    constructor(@Inject('CatsRepository') private readonly catsRepository: CatsRepository) {
    }

    async saveOrUpdate(createCatDto: ICat): Promise<ICat> {
        if (createCatDto.id) {
            return this.catsRepository.update(createCatDto);
        }
        const cat = new Cat();
        cat.name = createCatDto.name;
        cat.breed = createCatDto.breed;
        cat.age = createCatDto.age;
        return this.catsRepository.save(createCatDto);
    }

    async findAll(): Promise<ICat[]> {
        return this.catsRepository.getAll();
    }

    async findOne(id: number): Promise<ICat> {
        return this.catsRepository.getById(id);
    }

    async deleteById(id: number): Promise<ICat[]> {
        return this.catsRepository.deleteById(id);
    }
}
