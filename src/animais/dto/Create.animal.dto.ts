
import { IsString} from "class-validator"
export class CreateAnimalDto {

    @IsString()
    nome:string;

    @IsString()
    idade:number;

    @IsString()
    peso:string;

    @IsString()
    status:string;

    @IsString()
    habitat:string;

    @IsString()
    comportamento:string;

    @IsString()
    dieta:string;

    @IsString()
    observacao:string;
}