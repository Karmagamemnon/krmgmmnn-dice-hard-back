import { Module } from '@nestjs/common';
import { Unlocking } from './unlocking.entity';
import { UnlockingController } from './unlocking.controller';
import { UnlockingService } from './unlocking.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Unlocking])],
    providers: [UnlockingService],
    controllers: [UnlockingController],
})
export class UnlockingModule { }
