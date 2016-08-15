var express     = require('express');
var cors        = require('cors');
var bodyParser  = require('body-parser');
var request     = require('request');
const path      = require ('path');
var app         = express();

const baseUrl = 'https://data.ny.gov/resource/cb9z-ibgp.json';

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {

 request({
   url: baseUrl,
   method: 'GET',
   callback: function(error, response, body) {
     res.send(body);
   }
 })
});


app.use(express.static(__dirname + '/public'))

/* config for browser history in react */
app.get('*', (req, res) =>
res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
)

app.listen(process.env.PORT || 8080, () =>
console.log('example app listening')
)
