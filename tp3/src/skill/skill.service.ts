import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { SkillEntity } from './entities/skill.entity';

@Injectable()
export class SkillService {

  constructor(
    @InjectRepository(SkillEntity)
    private skillRepository: Repository<SkillEntity>
  ){}

  async addSkill(skill:CreateSkillDto):Promise<SkillEntity>{
    return await this.skillRepository.save(skill);
  }
  
  create(createSkillDto: CreateSkillDto) {
    return 'This action adds a new skill';
  }

  findAll() {
    return `This action returns all skill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
