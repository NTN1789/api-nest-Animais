import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { AnimalService } from "./animais.service";
import { CreateAnimalDto } from "./dto/Create.animal.dto";
import { UpdatePutAnimalDto } from "./dto/Update-Put.animal.dto";
import { UpdatePatchAnimalDto } from "./dto/UpdatePatchAnimal.dto";


@Controller('animais')
export class AnimalController {
    constructor(private animalService: AnimalService) { }

    @Post()
    async createAnimal(@Body() dados:CreateAnimalDto) {
        return await this.animalService.create(dados);
    }


    @Get()
    async listAnimals() {
        return await this.animalService.listUsuario();
    }


    @Get(":id")
    async readOne(@Param() id:number){
            return await this.animalService.show(id);
    }

    @Put(":id")
    async updateAnimal(@Body() dados:UpdatePutAnimalDto, @Param() id:number){
                return await this.animalService.update(id,dados);
    }

    @Patch(":id")
        async animalPatch(@Body() dados:UpdatePatchAnimalDto , @Param()  id:number){
            return await this.animalService.updateAndPatch(id, dados);

        }


        @Delete(":id")
        async deleteAnimal(@Param() id:number){
            return await this.animalService.delete(id);
        }

}