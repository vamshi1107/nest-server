import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'projectmail.services@gmail.com',
          pass: 'ceju dtne wwra kxix',
        },
      },
      defaults: {
        from: 'No Reply (DTT - Appointments)',
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
