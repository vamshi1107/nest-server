import { MailerService } from '@nestjs-modules/mailer';
import { Body, Injectable } from '@nestjs/common';
import { Appointment } from 'src/entities/appointment.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendConfirmation(
    appointment: Appointment,
    link: string,
    id: string,
  ): Promise<boolean> {
    await this.mailerService.sendMail({
      to: [
        appointment?.emailID,
        'vamshi.a4u@gmail.com',
        'ka1236@att.com',
        'anumulakarthikreddy1235@gmail.com',
        'sa7742@att.com',
      ],
      from: 'No Reply (DTT - Appointments)',
      subject: 'Confirmation of Your Video Call Appointment',
      template: 'appointment',
      context: {
        name: appointment?.name ?? '',
        date: appointment?.date ?? '',
        time: appointment?.time ?? '',
        link: link ?? '',
        id: id ?? '',
      },
    });
    return true;
  }
}
