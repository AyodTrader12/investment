import nodemailer from "nodemailer";
import { google } from "googleapis";
import env from "dotenv";
import path from "node:path";
import ejs from "ejs";
import { renderFile } from "ejs";
env.config();

const GOOGLE_ID = process.env.GOOGLE_ID as string;

const GOOGLE_SECRET = process.env.GOOGLE_SECRET as string;

const GOOGLE_URL = process.env.GOOGLE_URL as string;

const GOOGLE_TOKEN = process.env.GOOGLE_TOKEN as string;

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);
oAuth.setCredentials({ refresh_token: GOOGLE_TOKEN });

export const sendCreateAccountEmail = async () => {
  const accessToken: any = (await oAuth.getAccessToken()).token;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "ibrahimpopoola292@gmail.com",
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      refreshToken: GOOGLE_TOKEN,
      accessToken: accessToken,
    },
  });

  const pathFile = path.join(__dirname, "../views/index.ejs");
  const html = await ejs.renderFile(pathFile);
  const mailData = {
    to: "",
    from: `no reply<${process.env.MAIL_USER}>`,
    subject: "Account information",
    text: "this is a text",
  };
  await transporter.sendMail(mailData).then(() => {
    console.log("mail sent");
  });
};