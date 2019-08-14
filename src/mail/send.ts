import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

import { makeEmail } from './';

const dotEnv = dotenv.config();
const login: any = process.env.MAIL_LOGIN;
const pass: any = process.env.MAIL_PASS;

export const sendEmail = (user: string, url: string) => {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.yandex.com',
    port: 465,
    secure: true,
    auth: {
      user: login,
      pass: pass
    }
  });

  const { text, html } = makeEmail(url);
  let mailOptions = {
    from: {
      name: 'The Newsletter',
      address: login
    },
    to: user,
    subject: 'Verify your e-mail address',
    text,
    html
  };
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
};
