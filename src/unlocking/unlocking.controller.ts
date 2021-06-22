import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Unlocking } from './unlocking.entity';
import { UnlockingDto } from './interfaces/unlocking.dto';
import { UnlockingService } from './unlocking.service';

@Controller('/api/DepositUpdate')
export class UnlockingController {

    constructor(private readonly unlockingService: UnlockingService) { }

    @Get()
    index(): Promise<Unlocking[]> {
        return this.unlockingService.getAll();
    }

    @Get(":id")
    show(@Param('id', ParseIntPipe) id: number): Promise<Unlocking> {
        return this.unlockingService.getOne(id);
    }

    @Post()
    create(@Body() UpdateDto: UnlockingDto): Promise<void> {
        return this.unlockingService.addOne(UpdateDto);
    }

}