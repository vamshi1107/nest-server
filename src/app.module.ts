import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DttModule } from './dtt/dtt.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [DttModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
