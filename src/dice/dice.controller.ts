import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Dice } from './dice.entity';
import { DiceDto } from './interfaces/dice.dto';
import { DiceService } from './dice.service';

@Controller('/api/Dice')
export class DiceController {

    constructor(private readonly diceService: DiceService) { }

    @Get()
    index(): Promise<Dice[]> {
        return this.diceService.getAll();
    }

    @Get(":id")
    show(@Param('id', ParseIntPipe) id: number): Promise<Dice> {
        return this.diceService.getOne(id);
    }

    @Post()
    create(@Body() diceDto: DiceDto): Promise<void> {
        return this.diceService.addOne(diceDto);
    }

}