const express = require('express')
const serveStatic = require("serve-static")
const path = require('path')

App = express();
App.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
App.listen(port);