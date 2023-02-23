import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
    @Prop()
    id: string;
  
    @Prop()
    name: string;
  
    @Prop()
    imgUrl: string;
    
    @Prop()
    info: string;
    
    @Prop()
    jerseyColor: string;
}


export const PlayerSchema = SchemaFactory.createForClass(Player);