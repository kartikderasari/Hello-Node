const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
    /*    console.log(n1);
       console.log(n2); */
});

app.listen(3000, function () {
    console.log("Server is running at port 3000!")
});



app.post('/', function (req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    result = num1 + num2;
    res.send("The addition of the nos is:" + result);
    console.log(req.body);
});

