import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerDto } from './interfaces/player.dto';
import { PlayerService as PlayerService } from './player.service';

@Controller('/api/User')
export class PlayerController {

    constructor(private readonly playerService: PlayerService) { }

    @Get()
    index(): Promise<Player[]> {
        return this.playerService.getAll();
    }

    @Get(":id")
    show(@Param('id', ParseIntPipe) id: number): Promise<Player> {
        return this.playerService.getOne(id);
    }

    @Post()
    create(@Body() userDto: PlayerDto): Promise<void> {
        return this.playerService.addOne(userDto);
    }

}