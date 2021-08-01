const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')

const ENV = process.env.Node_ENV;
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Server sur le port ${PORT}...');
});
