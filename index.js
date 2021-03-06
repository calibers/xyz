var express = require("express");
var app = express();
var router = express.Router();
var path=__dirname +"/views/";
var path1 =require("path");

app.set('port', (process.env.PORT || 8000));


router.get('/', function(req, res){
    res.sendFile(path+"index.html");
});

app.use(express.static(__dirname));
app.use('/', router);
app.use('/js',express.static(path1.join(__dirname, 'public/javascripts')));
app.use('/css',express.static(path1.join(__dirname, 'public/stylesheets')));

//app.listen(8000, function(){
//    console.log("Live at port 8000");
//});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
