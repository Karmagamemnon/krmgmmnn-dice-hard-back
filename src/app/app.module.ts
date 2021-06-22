import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiceModule } from 'src/dice/dice.module';
import { PlayerModule } from 'src/player/player.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "dicehard",
      password: "CHoKDctfAaezlF7SuwN2",
      database: "dicehard_db",
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    DiceModule,
    PlayerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
