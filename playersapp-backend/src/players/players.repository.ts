import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Player, PlayerDocument } from './schemas/player.schema';



@Injectable()
export class PlayerRepository{
    constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>){}

    
    async findOne(playerFilterQuery: FilterQuery<Player>): Promise<Player>{
        return this.playerModel.findOne(playerFilterQuery);
    }

    async find(playerFilterQuery: FilterQuery<Player>): Promise<Player[]>{
        return this.playerModel.find(playerFilterQuery);
    }

    async create(player: Player): Promise<Player>{
        const newPlayer = new this.playerModel(player);
        return newPlayer.save()
    }

    async findOneAndUpdate(playerFilterQuery: FilterQuery<Player>, player: Partial<Player>):Promise<Player>{
        return this.playerModel.findOneAndUpdate(playerFilterQuery, player, { new:true });
    }

    async findOneAndDelete(playerId:string):Promise<Player>{
        return this.playerModel.findOneAndDelete({ id: playerId });
    }

}