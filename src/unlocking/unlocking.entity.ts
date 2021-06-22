import { Dice } from "src/dice/dice.entity";
import { Player } from "src/player/player.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Unlocking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("date")
    unlockingDate: Date;

    @ManyToOne(() => Player, player => player.unlockings)
    player: Player;

    @ManyToOne(() => Dice, dice => dice.unlockings)
    dice: Dice;

}
