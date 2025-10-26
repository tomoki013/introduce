import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, { message: "お名前は必須です。" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください。" }),
  message: z.string().min(1, { message: "お問い合わせ内容は必須です。" }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "入力内容に誤りがあります。", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_KEY,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: process.env.GMAIL_ADDRESS,
      subject: `【お問い合わせ】${name}様より`,
      html: `
        <h1>お問い合わせがありました</h1>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "お問い合わせありがとうございます。メッセージは正常に送信されました。" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "メッセージの送信に失敗しました。しばらくしてからもう一度お試しください。" },
      { status: 500 }
    );
  }
}
