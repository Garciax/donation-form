import { InjectModel } from '@nestjs/mongoose';
import { Donation, DonationDocument } from './schemas/donation.schema';
import { Model } from 'mongoose';
import { DonationDto } from './dto/donation.dto';

export class DonationService {
  constructor(
    @InjectModel(Donation.name)
    private readonly donationModel: Model<DonationDocument>,
  ) {}

  async create(donation: DonationDto): Promise<Donation> {
    return await this.donationModel.create(donation);
  }
}
