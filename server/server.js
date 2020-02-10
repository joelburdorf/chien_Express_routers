
// requires
const express = require('express');
const bodyParser = require('body-parser');

const productRouter = require('./routes/product.router')

// globals
const app = express();

// uses
//app.use(express.static('server/public'));
//if your server is receiving undefined date from POSTs your are likely missing the following:
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/product', productRouter);

// spin up server
const port = 5000;
app.listen(port, () => {
    console.log('server up on:', port);
}); // end spin up server

//require product routes
//redirect