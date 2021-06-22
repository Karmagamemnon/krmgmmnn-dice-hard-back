import { Player } from "src/player/player.entity";
import { Unlocking } from "src/unlocking/unlocking.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Dice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    idBoardgame: string;

    @Column({ length: 255 })
    title: string;

    @Column({ length: 255 })
    desciption: string;

    @Column({ type: "blob" })
    illustration: string;

    @ManyToOne(() => Player, player => player.createdDices)
    creator: Player;

    @OneToMany(() => Unlocking, unlocking => unlocking.dice)
    unlockings: Unlocking[];

}
