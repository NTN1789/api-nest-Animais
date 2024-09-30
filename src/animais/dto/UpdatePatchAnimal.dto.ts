import{PartialType} from '@nestjs/mapped-types';
import {CreateAnimalDto} from "./Create.animal.dto"

export class UpdatePatchAnimalDto  extends  PartialType(CreateAnimalDto){
 

}