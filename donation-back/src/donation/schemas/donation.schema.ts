import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DonationDocument = Donation & Document;

/**
 * Схема сущности пожертвования
 */
@Schema({ collection: 'donation' })
export class Donation {
  @Prop()
  amount: number;
  @Prop()
  currency: string;
}

export const DonationSchema = SchemaFactory.createForClass(Donation);
