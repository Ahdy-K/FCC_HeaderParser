
// init project
var express = require('express');
var app = express();
const port = process.env.PORT||8000
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/",  (req, res)=> {
  res.sendFile(__dirname + '/views/index.html');
});


// get infos from header
app.get("/api/whoami",  (req, res)=> {
  let whoami = {
    ip: req.socket.remoteAddress,
    lang: req.headers['accept-language'],
    software: req.headers['user-agent']
  }
  console.log(req.socket.remoteAddress)
  res.send(whoami);
});



// listen for requests :)
var listener = app.listen(port,  ()=> {
  console.log('Your app is listening on port ' + listener.address().port);
});
