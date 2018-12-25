/**
 * Created by sboudfor on 25/12/2018.
 */
const express = require('express') ;
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});