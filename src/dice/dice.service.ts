
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DiceDto } from "./interfaces/dice.dto";
import { Dice } from "./dice.entity";

@Injectable()
export class DiceService {

    constructor(
        @InjectRepository(Dice)
        private diceRepository: Repository<Dice>,
    ) { }

    getAll(): Promise<Dice[]> {
        return this.diceRepository.find();
    }

    getOne(id: number): Promise<Dice> {
        return this.diceRepository.findOne(id);
    }

    async addOne(diceDto: DiceDto): Promise<void> {
        await this.diceRepository.save(diceDto);
    }

}
