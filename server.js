const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.static(__dirname + '/client'));

app.post('/api', (req, res) => {
    res.json({success: true});
});

app.listen(port, () => console.log(`app listening on port ${port}`));