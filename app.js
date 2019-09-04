const express = require("express");
const path = require('path')
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
var db = require("./models/connectMssql");
//require the http module
const http = require("http").Server(app);
const port = process.env.PORT;

db.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api', require('./api.js'));

app.get('/',(req,res)=>{
  res.send('hello')
})
http.listen(port, () => {
  console.log("Running on Port: " + port);
});