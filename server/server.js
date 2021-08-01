const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password:"root",
        database:"promeo_langue",
    });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.send("server OnAir !");
});

app.post("/api/insert", (req, res) => {

    const title = req.body.title;
    const img = req.body.img;
    const text = req.body.text;

    const sqlInsert = "INSERT INTO articles (title, img, text) VALUES (?,?,?)";
    db.query(sqlInsert, [title, img, text], (err, result) => {
        console.log(err);
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("server on port 3001");
});