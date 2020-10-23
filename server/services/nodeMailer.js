"use strict";
const nodemailer = require("nodemailer");

module.exports = {

    sendEmail: async (data) => {
        try {
            const {name, email, message} = data;

            let transporter = nodemailer.createTransport({
                host: 'smtp-relay.gmail.com', 
                port: 465, 
                service:'gmail',
                secure: true, 
                auth: {
                    user: process.env.EMAIL_USER, 
                    pass: process.env.EMAIL_PASS, 
                },
                debug: false,
                logger: true 
            });

            // transport object
            let info = await transporter.sendMail({
                from: email,
                to: process.env.EMAIL_TO, 
                subject: `${name} ${email}`,
                text: message, 
            });


            return {info, name};

        } catch (err) {
            console.log(err);
        }
    }
}
