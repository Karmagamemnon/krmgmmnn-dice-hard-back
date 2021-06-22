
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PlayerDto } from "./interfaces/player.dto";
import { Player } from "./player.entity";

@Injectable()
export class PlayerService {

    constructor(
        @InjectRepository(Player)
        private playerRepository: Repository<Player>,
    ) { }

    getAll(): Promise<Player[]> {
        return this.playerRepository.find();
    }

    getOne(id: number): Promise<Player> {
        return this.playerRepository.findOne(id);
    }

    async addOne(UserDto: PlayerDto): Promise<void> {
        await this.playerRepository.save(UserDto);
    }

}
