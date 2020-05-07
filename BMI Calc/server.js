const express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("BMI Server is running at port 3000!");
});

app.get('/', function(req,res){
    res.sendFile( __dirname + "/bmiCalculator.html");
    console.log("Get method is called, HTML file is sent");
});

app.post('/bmicalculator', function(req,res) {
    console.log('Post method is called');
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    result = weight/(height*height);

    res.send("<h1>BMI Calculator</h1> <br> Your BMI is: " + result);
    
} )