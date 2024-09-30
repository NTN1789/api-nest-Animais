import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import {CreateAnimalDto} from "./dto/Create.animal.dto";
import {UpdatePutAnimalDto} from "./dto/Update-Put.animal.dto"
import {Repository} from "typeorm"
import {Animal} from "./models/entity/animal.entity"
import { InjectRepository } from "@nestjs/typeorm";

import { UpdatePatchAnimalDto } from "./dto/UpdatePatchAnimal.dto";

@Injectable()
export class  AnimalService{

        constructor(
                  @InjectRepository(Animal)
                private readonly animalRepository:Repository<Animal>
                
                
                
                ){}

      async  create( {nome,comportamento,habitat,idade,peso,status,dieta,observacao}:CreateAnimalDto){
    

        if (
                await this.animalRepository.exists({
                 
                    where:{
                      nome,
                      comportamento,
                      habitat,
                      idade,
                      peso,
                      status,
                      dieta,
                      observacao

                    }
                    
                
                })
              )  {
                throw new BadRequestException('Este animal ja foi criado .');
               
        } 
              const user = this.animalRepository.create({  
                        nome,
                        comportamento,
                        habitat,
                        idade,
                        peso,
                        status,
                        dieta,
                        observacao
                      
                })
                
              return  this.animalRepository.save(user);
       
        }

     
         async listUsuario(){
                  return await this.animalRepository.find({

                  }); 
       
                }

     

        async show(id:number){
                await this.exists(id);

        return await this.animalRepository.findOneBy({     
                                id : id      
                     });     
                }

        async update(id:number , {nome,comportamento,habitat,idade,peso,status,dieta,observacao}:UpdatePutAnimalDto){
            
            await this.exists(id);
      
              await  this.animalRepository.update(id,{
                                nome,
                                comportamento,
                                habitat,
                                idade,
                                peso,
                                status,
                                dieta,
                                observacao
                             
              });
              return this.show(id);
        }

        async updateAndPatch(id:number , {nome,comportamento,habitat,idade,peso,status,dieta,observacao}:UpdatePatchAnimalDto){
        
             await this.exists(id);
                const data: any = {};

        
                
                if (nome) {
                        data.nome = nome;   
           }

           

           if (comportamento) {
                data.comportamento = comportamento;   
   }
        
           if (habitat) {
                data.habitat = habitat;   
   }


   if (idade) {
        data.idade = idade;   
}

if (peso) {
        data.peso = peso;   
}
if (status) {
        data.status = status;   
}


if(dieta) {
                data.data = dieta;
}


if (observacao) {
                        data.observacao = observacao;
}

            await  this.animalRepository.update( id,{
                     
                         nome,
                         comportamento,
                         habitat,
                         idade,
                         peso,
                         status,
                         dieta,
                         observacao                              
                });
                return this.show(id);
        }
     async delete (id:number){
        await this.exists(id);
   
        

 await this.animalRepository.delete(id);
     
        return true;

}     

     
     async exists(id: number) {


     

        if (!(await  this.animalRepository.exists({
            where: {
                id,
            },
        }))) {
            throw new NotFoundException(`O animal ${id} não existe.`);
        
          }
   
   
        }
     
  


}