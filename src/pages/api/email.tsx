import sgMail, { MailDataRequired } from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

type SendEmailReturn = {
    status: string;
};

export default async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<SendEmailReturn> => {
    if (req.method === 'POST') {
        const { email, subject, message } = req.body;
        sgMail.setApiKey(process.env.SENDGRID_KEY);
        const msg: MailDataRequired = {
            to: process.env.BACKEND_EMAIL_ID,
            from: email,
            subject,
            text: message,
        };
        try {
            await sgMail.send(msg);
            res.status(200).send({ status: 'success' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: 'failed' });
        }
    }

    return;
};
