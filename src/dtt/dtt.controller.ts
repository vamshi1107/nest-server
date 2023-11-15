import { Controller, Get, Param, Query } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

@Controller('dtt')
export class DttController {
  constructor(readonly mailService: MailService) {}

  @Get('/')
  async getIndex(@Query('to') to: string) {
    let status: boolean = false;
    if (to) {
      status = await this.mailService.sendConfirmation(to);
    }
    return status;
  }
}
