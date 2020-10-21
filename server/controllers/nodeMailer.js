const {sendEmail} = require('../services/nodeMailer');

module.exports = {

    sendMail: async (req, res) => {
        const data = req.body;

        const email = await sendEmail(data);
        
        return res.status(200).send(email);

    }
}