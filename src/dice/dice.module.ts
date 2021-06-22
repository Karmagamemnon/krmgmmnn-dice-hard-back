import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dice } from './dice.entity';
import { DiceController } from './dice.controller';
import { DiceService } from './dice.service';

@Module({
    imports: [TypeOrmModule.forFeature([Dice])],
    providers: [DiceService],
    controllers: [DiceController],
})
export class DiceModule { }
