import { Body, Controller, Get, Post } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationDto } from './dto/donation.dto';

@Controller()
export class DonationControllers {
  constructor(private readonly service: DonationService) {}

  @Post('/donate')
  async create(@Body() donation: DonationDto) {
    await this.service.create(donation);
  }
}
