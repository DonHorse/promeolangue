// Page server, API, sert à faire le lien entre le front et le back : les requêtes sql et configurations de connexion sont ici

// import des librairies
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const nodemailer = require("nodemailer");


// Paramétrages server
app.use(express.json());
app.use(cors({
        origin: ["http://localhost:3000"],
        methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
        credentials: true,
    }
));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//session
app.use(
    session({
        key: "userId",
        secret: "horse",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24 * 7,
        },
    })
);

// Connexion à mysql
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database:"promeo_langue",
});

// Connexion à la boite mail d'envoie et reception
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "promeo.langue.dev@gmail.com",
        pass: "Promeo/60",
    },
    tls: {
        rejectUnauthorized: false
    }
});
// Vérification de l'envoi des mail
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

// -------------------------------------------------CRUD---------------------------------------------------------------

// --------------------------------------------CREATE / POST-----------------------------------------------------------

app.post("/questionnaireSend", (req, res) => {
    const name = req.body.Nom;
    const firstname = req.body.Prenom;
    const email = req.body.Mail;
    const mail = {
        from: name,
        to: "promeo.langue.dev@gmail.com",
        subject: "Promeo Langue - Contact message",
        html: `<p>Mme/Mr ${name} ${firstname}</p>
           <p>Adresse mail :  ${email}</p>
           <p> A soumis un questionnaire</p>`,
        attachments: [{

        }]
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});

app.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "promeo.langue.dev@gmail.com",
        subject: "Promeo Langue - Contact message",
        html: `<p>Mme/Mr ${name}</p>
           <p>Depuis l'adresse :  ${email}</p>
           <p>A laissé le message suivant: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});


app.post("/api/newArticle", (req, res) => {
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

app.post("/api/newQuestionForm", (req, res) => {
    const name = req.body.formname;
    const language = req.body.language;
    const creatorName = req.body.creatorName;
    const creatorMail = req.body.creatorMail;

    db.query(
        "INSERT INTO questionnaires (name, language, creator_name, creator_mail) VALUES (?,?,?,?)",
        [name, language, creatorName, creatorMail],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Ajouté !");
            }
        });
});

app.post("/api/newQuestion", (req, res) => {
    const question = req.body.question;
    const reponse1 = req.body.reponse1;
    const reponse2 = req.body.reponse2;
    const reponse3 = req.body.reponse3;
    const reponse4 = req.body.reponse4;
    const correction = req.body.correction;
    const Q_id = req.body.Qid;

    db.query(
        "INSERT INTO question_reponse (question, reponse_1, reponse_2, reponse_3, reponse_4, correct, questionnaire_id) VALUES (?,?,?,?,?,?,?)",
        [question, reponse1, reponse2, reponse3, reponse4, correction, Q_id],
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
                        req.session.user= result;
                        console.log(req.session.user);
                        res.send(result);

                    } if (err) {
                        res.send({ message: "Mauvaise combinaison email/mot de passe" });
                    }
                });
            } else {
                res.send({ message: "Adresse mail incorrect" });
            }
        }
    );
});

// ------------------------------------------------------READ / GET----------------------------------------------------


app.get("/api/getLastForm", (req, res) => {
    db.query("SELECT id FROM questionnaires ORDER BY creation_date DESC LIMIT 1",
        (err, result) => {
            if (err){
                console.log(err);
            }else {
                res.send(result);
            }
        })
});

app.get("/articleLast", (req, res) => {
    db.query("SELECT * FROM articles ORDER BY create_date DESC LIMIT 1",
        (err, result) => {
            if (err){
                console.log(err);
            }else {
                res.send(result);
            }
        })
});

app.get("/articleList", (req, res) => {
    db.query("SELECT * FROM articles ORDER BY create_date DESC",
        (err, result) => {
        if (err){
            console.log(err);
        }else {
            res.send(result);
        }
        })
});

app.get("/questionnaireList", (req, res) => {
    db.query("SELECT * FROM questionnaires ORDER BY creation_date DESC",
        (err, result) => {
            if (err){
                console.log(err);
            }else {
                res.send(result);
            }
        })
});

app.get("/questionnaire/:Qid", (req, res) => {
    const Qid = req.params.Qid;
    db.query("SELECT * FROM questionnaires WHERE id = ?", Qid,
        (err, result) => {
            if (err){
                console.log(err);
            }else {
                res.send(result);

            }
        })
});

app.get("/question/:Qid", (req, res) => {
    const Qid = req.params.Qid;
    db.query("SELECT * FROM question_reponse WHERE questionnaire_id = ?", Qid,
        (err, result) => {
            if (err){
                console.log(err);
            }else {
                res.send(result);

            }
        })
});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.clearCookie("userId");
    res.send({ loggedIn: false });
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
// -----------------------------------------------------UPDATE / PUT---------------------------------------------------

app.put("/api/homeModif/title", (req, res) => {
    const bodyTitle = req.body.bodyTitle;

    db.query("UPDATE info_page SET bodyTitle = ? WHERE id = 1",
        bodyTitle,
        (err, result) => {
            if (err) {
                console.log(err);
            }else
                res.send(result);
        });
});

app.put("/api/homeModif/body1", (req, res) => {
    const body1 = req.body.body1;

    db.query("UPDATE info_page SET body1 = ? WHERE id = 1",
        body1,
        (err, result) => {
            if (err) {
                console.log(err);
            }else
                res.send(result);
        });
});

app.put("/api/homeModif/footer1", (req, res) => {
    const footer1 = req.body.footer1;

    db.query("UPDATE info_page SET footer1 = ? WHERE id = 1",
        footer1,
        (err, result) => {
            if (err) {
                console.log(err);
            }else
                res.send(result);
        });
});

app.put("/api/homeModif/footer2", (req, res) => {
    const footer2 = req.body.footer2;

    db.query("UPDATE info_page SET footer2 = ? WHERE id = 1",
        footer2,
        (err, result) => {
            if (err) {
                console.log(err);
            }else
                res.send(result);
        });
});

app.put("/api/homeModif/footer3", (req, res) => {
    const footer3 = req.body.footer3;

    db.query("UPDATE info_page SET footer3 = ? WHERE id = 1",
        footer3,
        (err, result) => {
            if (err) {
                console.log(err);
            }else
                res.send(result);
        });
});

/* code pour mass change infos page:

app.put("/api/homeModif", (req, res) => {
    const bodyTitle = req.body.bodyTitle;
    const body1 = req.body.body1;
    const footer1 = req.body.footer1;
    const footer2 = req.body.footer2;
    const footer3 = req.body.footer3;


    db.query("UPDATE info_page SET bodyTitle = ?, body1 = ?, footer1 = ?, footer2 = ?, footer3 = ? WHERE id = 1",
        [bodyTitle, body1, footer1, footer2, footer3],
        (err, result) => {
        if (err) {
            console.log(err);
        }else
            res.send(result);
    });
});
*/

// ----------------------------------------------------DELETE / DELETE-------------------------------------------------



//END CRUD


//PORT SERVER API
app.listen(3001, () => {
    console.log("server on port 3001");
});