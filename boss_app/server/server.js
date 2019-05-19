const express = require('express');
const app = express();
const DB_URL = 'mongodb://localhost:27017/user';
const mongoose = require('mongoose');
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
    console.log('mongo connect success')
})

const User = mongoose.model('user', new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true}
}))

// 利用mongoose对MongoDB进行CRUD

User.create({name: 'Tom', age: 23}, function(err, doc) {
    if (!err) {
        console.log(doc);
    } else {
        console.log(err);
    }
})

User.find({}, function(err, doc) {
    if (!err) {
        console.log(doc);
    }
})

// User.remove({name: null}, function(err, doc) {
//     if (!err) {
//         console.log(doc);
//     }
// })

// User.update({'name': 'ericao'}, {'$set': {age: -21}}, function(err, doc) {
//     if (!err) {
//         console.log(doc);
//     }
// })

app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>');
})
app.listen(9093, function() {
    console.log('Node app start at port 9093');
})
