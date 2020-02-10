
// requires
const express = require('express');
const bodyParser = require('body-parser');

// globals
const app = express();
const port = 5000;

// uses
app.use(express.static('server/public'));
//if your server is receiving undefined date from POSTs your are likely missing the following:
app.use(bodyParser.urlencoded({ extended: true }));

// spin up server
app.listen(port, (req, res) => {
    console.log('server up on:', port);
}) // end spin up server