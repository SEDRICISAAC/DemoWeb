const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT =  3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', (req, res) => {
    const event = require('./db.json').ubicaciones;
    res.send(event)
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});