import { Module } from '@nestjs/common';
import { DttController } from './dtt.controller';
import { DttService } from './dtt.service';
import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [DttController],
  providers: [DttService, MailService],
})
export class DttModule {}
