const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setTypeString = (maxSymbols) => ({ type: String, required: true, maxlength: maxSymbols });
    



const projtectSchema = new Schema({
    userId: setTypeString(512),
    title: setTypeString(256),
    subtitle: setTypeString(256),
    description: setTypeString(1256),
    img:setTypeString(512),
    startDate: {type: Date, required: true},
    endDate: Date
});

module.exports = mongoose.model('Projects', projtectSchema);