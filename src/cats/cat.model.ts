import { IsString, MaxLength, MinLength } from 'class-validator';

export class CatModel {
    readonly id: number;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    readonly name: string;

    readonly age: number;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    readonly breed: string;
}
