import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';


import { Player} from 'src/players/schemas/player.schema';
import { PlayerRepository } from 'src/players/players.repository';
import { UpdatePlayerDto }  from 'src/dto/update-player.dto';


@Injectable()
export class NbaPlayerService {
    constructor( private readonly playerRepository: PlayerRepository ){}

    async getPlayerById(playerId:string): Promise<Player>{
        return this.playerRepository.findOne({ playerId })
    }

    async getPlayers(): Promise<Player[]>{
        return this.playerRepository.find({});
    }

    async createPlayer(name:string, imgUrl:string, info: string, jerseyColor: string): Promise<Player>{
        return this.playerRepository.create({
            id: uuidv4(),
            name,
            imgUrl,
            info,
            jerseyColor
        })
       
    }

    async updatePlayer(id:string,playerUpdates: UpdatePlayerDto): Promise<Player>{
        return this.playerRepository.findOneAndUpdate({ id }, playerUpdates)
    }

    async deletePlayer(id:string): Promise<Player>{
        return this.playerRepository.findOneAndDelete(id);
    }
}
