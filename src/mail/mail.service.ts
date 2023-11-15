import { MailerService } from '@nestjs-modules/mailer';
import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendConfirmation(to: string): Promise<boolean> {
    await this.mailerService.sendMail({
      to,
      from: 'No Reply (DTT - Appointments)',
      subject: 'Your Meeting is Confirmed',
    });
    return true;
  }
}
