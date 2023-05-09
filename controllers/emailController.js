const nodemailer = require('nodemailer');
const { emailConfig } = require('../config/nodemailer');

module.exports = {
    async sendEmail(to, subject, text) {
        try {
            const transporter = nodemailer.createTransport(emailConfig);

            const mailOptions = {
                from: emailConfig.auth.user,
                to: to,
                subject: subject,
                text: text
            };

            const info = await transporter.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
        } catch (err) {
            console.error(err);
        }
    }
};