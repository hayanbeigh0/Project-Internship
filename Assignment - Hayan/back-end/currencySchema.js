const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A currency must have a name.']
    },
    last: {
        type: Number,
        required: [true, 'A currency must have a last.']
    },
    buy: {
        type: Number,
        // required: true
    },
    sell: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    base_unit: {
        type: String,
        required: true
    }  
});

const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;