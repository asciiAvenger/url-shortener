const express = require('express');
const sqlite3 = require('sqlite3');
require('dotenv').config();

const app = express();
const db = new sqlite3.Database('./database.db');

db.run('CREATE TABLE IF NOT EXISTS urls ( id INTEGER PRIMARY KEY, url VARCHAR(255) NOT NULL, timeout SMALLINT NOT NULL, message VARCHAR(255) )');

app.use(express.json());
// app.use(express.static(__dirname + '/client'));

app.post('/api', (req, res) => {
    db.run('INSERT INTO urls (url, timeout, message) VALUES (?, ?, ?)', [req.body.url, req.body.timeout, req.body.message], err => {
        if (err) {
            res.json({success: false});
        } else {
            res.json({success: true});
        }
    });
});

app.get('/api', (req, res) => {
    db.all('SELECT * FROM urls', [], (err, rows) => {
        if (!err) {
            res.json(rows);
        }
    });
});

app.get('/api/:id', (req, res) => {
    db.get('SELECT * FROM urls WHERE id = ?', [req.params.id], (err, row) => {
        if (!err) {
            res.json(row);
        }
    });
});

app.listen(process.env.PORT || 3000, () => console.log(`app listening on port ${process.env.PORT}`));
