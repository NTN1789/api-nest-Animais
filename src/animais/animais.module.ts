import { MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";




import { TypeOrmModule } from "@nestjs/typeorm";

import {Animal} from "./models/entity/animal.entity";
import { AnimalService } from "./animais.service";
import { AnimalController } from "./animais.controller";

@Module({
    imports:[

        TypeOrmModule.forFeature([Animal])
    ],

    controllers:[AnimalController],  
    providers:[AnimalService ] ,   
    exports:[AnimalService]
})  
export class AnimalModule  implements  NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply().forRoutes(AnimalController, {
    
            path: 'animais/:id',
            method: RequestMethod.ALL
         
        })
      

    }
}
