import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DonationDocument = Donation & Document;

@Schema()
export class Donation {
  @Prop()
  amount: number;
  @Prop()
  currency: string;
}

export const DonationSchema = SchemaFactory.createForClass(Donation);
