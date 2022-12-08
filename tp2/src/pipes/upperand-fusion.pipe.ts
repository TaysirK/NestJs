import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperandFusionPipe implements PipeTransform {
  transform(Myarray: {data:string[]}, metadata: ArgumentMetadata) {
    if (metadata.type ==='body'){
      return Myarray.data?.map((element)=>element.toUpperCase()).join('-');
    }else{
      throw new BadRequestException('CC');
    }

  }
}
