import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

import { makeEmail } from './';

const dotEnv = dotenv.config();
const login: any = process.env.LOGIN;
const pass: any = process.env.PASS;

export const sendEmail = async (user: string, url: string) => {
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
  try {
    const result: { messageId: string; response: string } = await transporter.sendMail(
      mailOptions
    );
    console.log('Message %s sent: %s', result.messageId, result.response);
    return result.response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
