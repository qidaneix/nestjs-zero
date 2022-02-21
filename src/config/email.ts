import { join } from 'path';
import { PugAdapter } from '@nest-modules/mailer';

export default {
  transport: 'smtps://791413943@qq.com:ntidxzeiadylbdbe@smtp.qq.com',
  template: {
    dir: join(__dirname, '../templates/email'),
    adapter: new PugAdapter(),
    options: {
      strict: true,
    },
  },
};
