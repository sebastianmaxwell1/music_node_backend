const express = require('express');
const repoContext = require('./repository/repository-wrapper');

const app = express();

app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");

});