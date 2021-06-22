import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Player } from "../player/player.entity";

@Entity()
export class Dice {

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryGeneratedColumn()
    idBoardgame: string;

    @Column({ length: 255 })
    title: string;

    @Column({ length: 255 })
    desciption: string;

    @Column({ type: "blob" })
    illustration: string;

    @ManyToOne(() => Player, player => player.createdDices)
    creator: Player;

}
