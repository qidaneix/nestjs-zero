import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail() {
    this.mailerService.sendMail({
      to: 'xiaojin1992@126.com',
      from: '791413943@qq.com',
      subject: 'strong brave and gentle',
      // html: '<h1>for you<h1>',
      template: 'welcome',
    });
  }
}
