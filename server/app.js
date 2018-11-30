var express = require('express');

var app = express();


app.get('/',function (req,res) {
    res.send('hello word');
});

app.listen(7000,function () {
    console.log('Server started on port 7000...');
})