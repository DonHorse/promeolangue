const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"root",
        database:"promeo_langue",
    });


app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const img = req.body.img;
    const text = req.body.text;


    db.query(
        "INSERT INTO articles (title, img, text) VALUES (?,?,?)",
        [title, img, text],
        (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Ajouté !");
        }
    });
});

app.listen(3001, () => {
    console.log("server on port 3001");
});