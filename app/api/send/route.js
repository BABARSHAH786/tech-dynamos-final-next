import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json(); // Get data from frontend
    const { firstName, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: `${firstName} <onboarding@resend.dev>`,  // Shows sender name
      to: ['ba2091247@gmail.com'],                // 👈 Your email
      subject: `New client inquiry from ${firstName}`,
      react: EmailTemplate({ firstName, email, message }), // dynamic content
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
