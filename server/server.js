const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken")


app.use(express.json());
app.use(cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "UPDATE", "DELETE"],
        credentials: true,
    }
));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "horse",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);


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

app.post("/register", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const role = req.body.role;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query(
            "INSERT INTO user (FirstName, LastName, email, password, role) VALUES (?,?,?,?,?)",
            [firstname, lastname, email, hash, role],
            (err, result) => {
                console.log(err);
            }
        );
    });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user WHERE email = ?",
        email,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {


                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 900,
                        })
                        req.session.user= result;
                        console.log(req.session.user.email);
                        res.json({auth : true, token: token, result: result});

                    } else {
                        res.send({ message: "Mauvaise combinaison email/mot de passe" });
                    }
                });
            } else {
                res.send({ message: "Adresse mail incorrect" });
            }
        }
    );
});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.put("/api/homeModif", (req, res) => {
    const bodyTitle = req.body.bodyTitle;
    const body1 = req.body.body1;
    const footer1 = req.body.footer1;
    const footer2 = req.body.footer2;
    const footer3 = req.body.footer3;

    db.query(
        "UPDATE info-page SET (bodyTitle, body1, footer1, footer2, footer3) VALUES (?,?,?,?,?) WHERE id = 1",
        [bodyTitle, body1, footer1, footer2, footer3],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
 });

app.get('/api/homeInfo', (req, res) => {
    db.query("SELECT * FROM info_page", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("server on port 3001");
});