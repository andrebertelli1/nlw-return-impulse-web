import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f3d866d6e43e16",
    pass: "418df47b139c18"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Andre Bertelli <decobertelli@gmail.com>',
      subject,
      html: body,
    });
  }
}