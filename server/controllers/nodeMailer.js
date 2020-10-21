const {sendEmail} = require('../services/nodeMailer');

module.exports = {

    sendMail: async (req, res) => {
        const data = req.body;

        const email = await sendEmail(data);
        
        if (!email) {

            return res.status(500).send("Server problem");
        } 

        return res.status(200).send(true);

    }
}