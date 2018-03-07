
var express = require('express');
var cookieParser = require('cookie-parser');
var crypto = require('crypto');
var app = express();
app.use(cookieParser());
var sameSite = process.argv[2] || true;
app.locals.sessionID = crypto.randomBytes(32).toString('base64');


app.get('/', function (req, res) {
    res
        .status(200)
        .cookie('sessionID', app.locals.sessionID, { sameSite: sameSite })
        .send('<html><body>Your bank server(the victim)<form method="POST" action="http://localhost:3000/"><input type="submit"\></form></body></html>')
        .end();
});


app.post('/', function(req, res) {
    console.log('cookies',req.cookies);
    // Yes, this should be a secure time comparison! But it's a demo. Don't do this in your app.
    if(req.cookies.sessionID === app.locals.sessionID){
        res
            .status(200)
            .send('Success! You have sent your POST request from a valid origin, and it passes CSRF checking.<a href="http://127.0.0.1:3001">Test from Cross-Site.</a>')
            .end();
    } else {
        res
            .status(403)
            .send('Fail! Either you do not have a session cookie set, or this POST request came from a different origin and the session cookie was not sent with the request. Access is denied.')
            .end();
    }
});

app.listen(3000, function () {
    console.log('demo app running on localhost:3000');
});