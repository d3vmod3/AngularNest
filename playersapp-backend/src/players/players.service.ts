import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
    private players = [
        {
            name: 'Lebron James',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254',
            info: '#6 Forward - Los Angeles Lakers',
            jerseyColor: 'warning',
        },
        {
            name: 'Stephen Curry',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
            info: '#6 Guard - Golden State Warriors',
            jerseyColor: 'primary',
        },
        {
            name: 'Kyrie Irving',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png&w=350&h=254',
            info: '#11 Guard - Brooklyn Nets',
            jerseyColor: 'dark',
        },
        {
            name: 'Luca Doncic',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254',
            info: '#66 Guard - Dallas Mavericks',
            jerseyColor: 'light',
        },
        {
            name: 'Giannis Antetokounmpo',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png&w=350&h=254',
            info: '#34 Forward - Milwaukee Bucks',
            jerseyColor: 'success',
        },
        {
            name: 'James Harden',
            imgUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254',
            info: '#1 Guard - Philiadelphia 76ers',
            jerseyColor: 'danger',
        },
        
    ];

    getPlayers(){
        return this.players;
    }
}
