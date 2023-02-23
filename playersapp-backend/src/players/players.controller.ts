import { Controller, Get, Post,Body, Param,Patch, Delete, NotFoundException } from '@nestjs/common';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
// import { PlayersService } from './players.service';
import { NbaPlayerService } from 'src/nba-player/nba-player.service';

import { Player} from 'src/players/schemas/player.schema';
import { CreatePlayerDto }  from 'src/dto/create-player.dto';
import { UpdatePlayerDto }  from 'src/dto/update-player.dto';

// interface Player {
//     id: number;
//     name: string;
//     imgUrl: string;
//     info: string;
//     jerseyColor: string;
//   }

@Controller('players')

export class PlayersController {

    constructor(private nbaPlayersService: NbaPlayerService ){
    }

    // @Get()
    // getPlayers(){
    //     return this.playersService.getPlayers();
    // }
    
    // @Get(':id')
    // async getPlayerById(@Param('id') id: number): Promise<Player> {
    //     const cat = await this.playersService.getCatById(id);
    //     return cat;
    //   }
    
    // //create new Player
    // @Post()
    // async add(@Body() body: any): Promise<any> {
    //   const result = await this.playersService.add(body);
    //   return result;
    // }

    // //update player
    // @Put(':id')
    // async updatePlayer(@Param('id') id: number, @Body() updatePlayerDto: any): Promise<any> {
    //   const result  = this.playersService.updatePlayer(id, updatePlayerDto);
    //   return result;
    // }

    // //Delete Player
    // @Delete(':id')
    // async deletePlayer(@Param('id') id: number): Promise<any> {
    //   const result = await this.playersService.deletePlayer(id);
    // }

    @Get()
    async getPlayers(): Promise<Player[]>{
      return this.nbaPlayersService.getPlayers();
    }

    @Get(':playerId')
    async getUser(@Param('playerId') userId: string): Promise<Player> {
      return this.nbaPlayersService.getPlayerById(userId);
    }

    @Post()
    async createPlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
      return this.nbaPlayersService.createPlayer(createPlayerDto.name,createPlayerDto.imgUrl,createPlayerDto.info,createPlayerDto.jerseyColor)
    }

    @Patch(':playerId')
    async updateUser(@Param('playerId') playerId: string, @Body() updateUserDto: UpdatePlayerDto): Promise<Player> {
        return this.nbaPlayersService.updatePlayer(playerId, updateUserDto);
    }

    @Delete(':playerId')
    async deletePlayer(@Param('playerId') playerId: string): Promise<Player> {
        return this.nbaPlayersService.deletePlayer(playerId);
    }

}
