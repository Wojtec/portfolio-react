const express = require('express');
const router = express.Router();

const mailerCtrl = require('../controllers/nodeMailer');

router.post('', mailerCtrl.sendMail);


module.exports = router;