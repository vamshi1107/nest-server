import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Appointment } from 'src/entities/appointment.dto';
import { MailService } from 'src/mail/mail.service';
import { v4 } from 'uuid';

@Controller('dtt')
export class DttController {
  constructor(readonly mailService: MailService) {}

  @Post('/book')
  async getIndex(@Body() appointment: Appointment) {
    let status: number = 0;
    try {
      console.log('Appointment', appointment);
      if (appointment?.emailID != undefined) {
        let id = Math.round(Date.now()).toString(36);
        let meetingLink = `https://peer-js-meets.vercel.app/`;
        let mail = await this.mailService.sendConfirmation(
          appointment,
          meetingLink,
          id,
        );
        console.log('Mail response', mail);
        if (mail?.accepted?.length > 0) {
          status = 100;
        } else {
          status = 200;
        }
      } else {
        status = 300;
      }
    } catch (err) {
      console.log('error', err);
      status = 400;
    }
    return { status };
  }
}
