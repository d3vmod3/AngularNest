import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { NbaPlayerService } from './nba-player/nba-player.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PlayersModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/nbaPlayersDB')],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
