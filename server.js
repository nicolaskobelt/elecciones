const express = require('express')
const serveStatic = require("serve-static")
const path = require('path')

var connect = require("connect");

app = express();
app = connect.createServer().use(serveStatic(path.join(__dirname, 'dist')));
// const port = ;
app.listen(process.env.PORT || 3000);