
var express = require('express');
var app_CSRF = express();


app_CSRF.get('/', function (req, res) {
    res
    .status(200)
    .send('<html><body>Attempt to send request from a separate origin:<form method="POST" action="http://localhost:3000/"><input type="submit"\></form></body></html>')
    .end();
});

app_CSRF.listen(3001, function () {
    console.log('evil server up on localhost:3001');
})
