import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Donation, DonationSchema } from './schemas/donation.schema';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controllers';

/**
 * Модуль пожертовования
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Donation.name, schema: DonationSchema },
    ]),
  ],
  providers: [DonationService],
  controllers: [DonationController],
})
export class DonationModule {}
