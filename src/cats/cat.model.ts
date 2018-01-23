import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";


export class MouseModel {
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiModelProperty()
    readonly name: string;
}

export class CatModel {
    @ApiModelProperty()
    readonly id: number;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty({
        description: 'This is a cat age. We all know cats have more than 9 life so multiply by random(1,9)'
    })
    readonly age: number;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiModelProperty()
    readonly breed: string;

    @ApiModelPropertyOptional({
        description: 'The Jerry',
        type: MouseModel
    })
    readonly favouriteMouse?: MouseModel
}