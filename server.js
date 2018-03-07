
var express = require('express');
var cookieParser = require('cookie-parser');
var crypto = require('crypto');
var app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    res
    .status(200)
    .send('<html><body>Your bank server(the victim)<form method="POST" action="http://localhost:3000/"><input type="submit"\></form></body></html>')
    .end();
});


app.post('/', function(req, res) {
 console.log('cookies',req.cookies);
res
        .status(200)
        .send('Success!')
        .end();
});

app.listen(3000, function () {
  console.log('demo app running on localhost:3000');
});