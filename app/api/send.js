// import { EmailTemplate } from '../../components/email-template';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req, res) => {
//   const { data, error } = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['delivered@resend.dev'],
//     subject: 'Hello world',
//     react: EmailTemplate({ firstName: 'John' }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };

// new
import { EmailTemplate } from '../../components/email-template'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { firstName, email, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const { data, error } = await resend.emails.send({
      from: `${firstName} <onboarding@resend.dev>`,
      to: ['techdynamoss@gmail.com'],
      subject: `New message from ${firstName}`,
      react: EmailTemplate({ firstName, email, message }),
    });

    if (error) {
      return res.status(500).json({ error: error.message || "Sending failed" });
    }

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Unknown server error" });
  }
}
