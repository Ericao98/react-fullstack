const DB_URL = 'mongodb://localhost:27017/user';
const mongoose = require('mongoose');

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
    console.log('mongo connect success')
})