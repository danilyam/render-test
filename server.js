const express = require('express');
const {Pool} = require('pg');

const app = express();

const pool = new Pool({
    ssl: {
        rejectUnauthorized: false,
    },
});

app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'Success'});
    } catch(err) {
        console.error('Error acured');
        res.status(500).send('Error acured', err);
    }
})

app.listen(3000, () => {
    console.log('The server is running at 3000 port');
})