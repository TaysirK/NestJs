import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import {InjectRepository} from '@nestjs/typeorm';
import { CvEntity } from './entities/cv.entity';
import { Repository} from 'typeorm';

@Injectable()
export class CvService {

  constructor(
    @InjectRepository(CvEntity)
    private cvRepository: Repository<CvEntity>
  ){}

  async addCV(cv:CreateCvDto):Promise<CvEntity>{
    return await this.cvRepository.save(cv);
  }
  
  create(createCvDto: CreateCvDto) {
    return 'This action adds a new cv';
  }

  findAll() {
    return `This action returns all cv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cv`;
  }

  update(id: number, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} cv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cv`;
  }
}
