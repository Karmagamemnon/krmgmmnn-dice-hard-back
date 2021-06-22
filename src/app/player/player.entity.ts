import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Dice } from "../dice/dice.entity";

@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 15, nullable: true  })
    title: string;

    @Column({ length: 255 })
    firstname: string;

    @Column({ length: 255 })
    lastname: string;

    @Column({ length: 255, unique: true })
    nickname: string;

    @Column({ length: 255, unique: true })
    mail: string;

    @Column({ length: 255 })
    password: string;

    @Column("date")
    registrationDate: Date;

    @OneToMany(() => Dice, dice => dice.creator)
    createdDices: Dice[];

    @ManyToMany(() => Dice)
    @JoinTable({ name: "player_unlocks_dices", })
    unlockedDices: Dice[];

}
