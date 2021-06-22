
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnlockingDto } from './interfaces/unlocking.dto';
import { Unlocking } from './unlocking.entity';

@Injectable()
export class UnlockingService {

    constructor(
        @InjectRepository(Unlocking)
        private updateRepository: Repository<Unlocking>,
    ) { }

    getAll(): Promise<Unlocking[]> {
        return this.updateRepository.find();
    }

    getOne(id: number): Promise<Unlocking> {
        return this.updateRepository.findOne(id);
    }

    async addOne(unlockingDto: UnlockingDto): Promise<void> {
        await this.updateRepository.save(unlockingDto);
    }

    async removeOne(id: number): Promise<void> {
        await this.updateRepository.delete(id);
    }

}
