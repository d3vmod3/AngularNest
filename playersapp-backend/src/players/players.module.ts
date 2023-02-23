import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersController } from './players.controller';
// import { PlayersService } from './players.service';

import { Player, PlayerSchema } from './schemas/player.schema';
import { NbaPlayerService } from 'src/nba-player/nba-player.service';
import { PlayerRepository } from './players.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
  controllers: [PlayersController],
  // providers: [PlayersService, NbaPlayerService]
  providers: [NbaPlayerService,PlayerRepository]
})
export class PlayersModule {}
