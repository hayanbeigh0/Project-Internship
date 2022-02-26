const express = require('express');
const axios = require('axios');
const cors = require('cors');

const Currency = require('./currencySchema');

const app = express();

app.use(cors());

const loadResults = async () => {
    let results = [];

    try {
        await axios.get('https://api.wazirx.com/api/v2/tickers').then(res => {
            const data = res.data;
        
            const keys = Object.keys(data);
            for (let i = 0; i < 10; i++) {
                results.push(data[keys[i]]);
            }
    
        });

    } catch (err) {
        console.log(err);
    }

    return results;
}

const filterObj = (obj, ...selectFields) => {
    const resObj = {};
    
    selectFields.forEach(cur => {
        resObj[cur] = obj[cur];
    })

    return resObj;
}

let results = [];

loadResults().then(async res => {
    res.forEach(cur => {
        results.push(filterObj(cur, 'name', 'last', 'buy', 'sell', 'volume', 'base_unit'));
    });

    console.log(results);

    await Currency.create(results);
});

app.get('/', async (req, res, next) => {
    try {
        const data = await Currency.find();

        res.status(200).json({
            status: 'success',
            results: data.length,
            data
        })
    } catch (err) {
        console.log(err);
    }
})

module.exports = app;