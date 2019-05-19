const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>');
})
app.listen(9093, function() {
    console.log('Node app start at port 9093');
})