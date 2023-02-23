import { Injectable } from '@nestjs/common';
import { Controller, Get, Post,Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { PlayerRepository } from './players.repository';
import { v4 as uuidv4 } from 'uuid';

interface Player {
    id: number;
    name: string;
    imgUrl: string;
    info: string;
    jerseyColor: string;
  }

@Injectable()
export class PlayersService {
    private players = [
        {
            id : 1,
            name: 'Lebron James',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254',
            info: '#6 Forward - Los Angeles Lakers',
            jerseyColor: 'warning',
        },
        {
            id : 2,
            name: 'Stephen Curry',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
            info: '#30 Guard - Golden State Warriors',
            jerseyColor: 'primary',
        },
        {
            id : 3,
            name: 'Kyrie Irving',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png&w=350&h=254',
            info: '#11 Guard - Brooklyn Nets',
            jerseyColor: 'dark',
        },
        {
            id : 4,
            name: 'Luca Doncic',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254',
            info: '#66 Guard - Dallas Mavericks',
            jerseyColor: 'light',
        },
        {
            id : 5,
            name: 'Giannis Antetokounmpo',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png&w=350&h=254',
            info: '#34 Forward - Milwaukee Bucks',
            jerseyColor: 'success',
        },
        {
            id : 6,
            name: 'James Harden',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254',
            info: '#1 Guard - Philiadelphia 76ers',
            jerseyColor: 'danger',
        },
        
    ];

    // @Get()
    getPlayers(){
        return this.players.sort((a, b) => {
            if (a.id > b.id) {
              return -1;
            } else if (a.id < b.id) {
              return 1;
            } else {
              return 0;
            }
          });
    }

    @Get(':id')
    async getCatById(id: number): Promise<Player> {
        const playerId = +id;
        const player = await this.players.find(player => player.id === playerId);
        return player;
      }

    findOne(@Param('id') id: number): Player {
        const playerId = +id;
        return this.players.find(player => player.id === playerId);
    }


    add(@Body() body){
        this.players.push(body);
        return this.players;
    }

    updatePlayer(@Param('id') id: number, @Body() updatePlayerDto: any): any {
        const itemIndex = this.players.findIndex(player => player.id === +id);
        const updatedPlayer = {
            ...this.players[itemIndex], ...updatePlayerDto
        }
        this.players[itemIndex] = updatedPlayer;
        return this.players;
    }


    deletePlayer(@Param('id') id: number): any {
        const itemIndex = this.players.findIndex(player => player.id === +id);
        if (itemIndex === -1) {
            // throw new NotFoundException(`Item with ID ${id} not found.`);
            return `Player with ID ${id} not found.`;
        }
        this.players.splice(itemIndex, 1);
        return this.players;
    }



    
}
