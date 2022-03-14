import { Body, Controller, Post } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationDto } from './dto/donation.dto';
import { ResponseDto } from './dto/response.dto';

/**
 * Контроллер по работе с пожертвованиями
 */
@Controller()
export class DonationController {
  constructor(private readonly service: DonationService) {}

  /**
   * Получает запрос на пожертвование
   * @param donation пожертвование
   */
  @Post('/donate')
  async create(@Body() donation: DonationDto): Promise<ResponseDto> {
    if (donation.amount > 0) {
      const savedDonation = await this.service.create(donation);
      if (savedDonation) {
        return new ResponseDto(true);
      }
    } else {
      return new ResponseDto(false, 'Amount required');
    }
  }
}
