const mongoose = require('mongoose');

const app = require('./app');

const conString = 'mongodb://127.0.0.1:27017/test';
const port = 3000;

mongoose.connect(conString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB connection successful...');

    app.listen(port, '0.0.0.0', () => {
        console.log(`Application starting on port ${port}`);
    });
    
}).catch(err => {
    console.log('error connecting to the database!');
    console.log(err)
});