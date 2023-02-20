import { Controller, Get, Post,Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { PlayersService } from './players.service';

interface Player {
    id: number;
    name: string;
    imgUrl: string;
    info: string;
    jerseyColor: string;
  }

@Controller('players')

export class PlayersController {

    // constructor(private playersService: PlayersService ){

    // }

    

    private players : Player[] = [
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

    @Get()
    getPlayers(){
        // return this.playersService.getPlayers();
        // return this.players.sort((a,b) => a.name.localeCompare(b.name));
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
    findOne(@Param('id') id: number): Player {
        const playerId = +id;
        return this.players.find(player => player.id === playerId);
    }

    @Put(':id')
    updatePlayer(@Param('id') id: number, @Body() updatePlayerDto: any): any {
        const itemIndex = this.players.findIndex(player => player.id === +id);
        const updatedPlayer = {
            ...this.players[itemIndex], ...updatePlayerDto
        }
        this.players[itemIndex] = updatedPlayer;
        return this.players;
    }

    @Post()
    add(@Body() body){
        this.players.push(body);
        return this.players;
    }

    @Delete(':id')
    deleteItem(@Param('id') id: number): any {
        const itemIndex = this.players.findIndex(player => player.id === +id);
        if (itemIndex === -1) {
            // throw new NotFoundException(`Item with ID ${id} not found.`);
            return `Player with ID ${id} not found.`;
        }
        this.players.splice(itemIndex, 1);
        return this.players;
    }
}
