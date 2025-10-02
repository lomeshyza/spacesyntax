// server.js
import express from 'express';
import { createTransport } from 'nodemailer';
import { json } from 'body-parser';

const app = express();
app.use(json());

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'ваш_email@gmail.com',
        pass: 'ваш_пароль',
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, orderDetails } = req.body;

    const mailOptions = {
        from: 'ваш_email@gmail.com',
        to: email,
        subject: 'Подтверждение заказа',
        text: `Здравствуйте, ${name}! Ваш заказ: ${orderDetails}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
