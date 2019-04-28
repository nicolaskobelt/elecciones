const express = require('express')
const serveStatic = require("serve-static")
const path = require('path')


app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(express.static(__dirname + '/public'));
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});
// const port = ;
app.listen(process.env.PORT || 3000);