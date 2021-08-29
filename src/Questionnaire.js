// Page d'affichage d'un questionnaire'
// imports des librairies
import React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Axios from "axios";


// fonction contenant l'affichage du questionnaire
function Questionnaire() {

    let count = 0;
    let score = 0;

    const [Questionnaire, setQuestionnaire] = useState([]);
    const [Question, setQuestion] = useState([]);
    const [Nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [Mail, setMail] = useState("");
    const [UserRep, setUserRep] = useState([])
    const [TrueRep, setTrueRep] = useState([])

    // on vient chercher l'information de l'id dans l'url
    let {slug} = useParams();

    // requête à l'API GET (renvoie tous les infos du questionnaire et les questions)
    useEffect(() => {
        Axios.get("http://localhost:3001/questionnaire/"+slug).then((response) => {
            setQuestionnaire(response.data);
        });
    });
    useEffect(() => {
        Axios.get('http://localhost:3001/question/' + slug).then((response) => {
            setQuestion(response.data);

        });
    });

        const [status, setStatus] = useState("Envoyer vos réponse!");
        const handleSubmit = async (e) => {
            e.preventDefault();
            setStatus("Sending...");
            const { Nom, Prenom, Mail } = [Nom, Prenom, Mail];
            let details = {
                Nom: Nom.value,
                Prenom: Prenom.value,
                Mail: Mail.value,
            };
            // Envoie des infos vers l'API
            let response = await fetch("http://localhost:3001/questionnaireSend", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });
            setStatus("Submit");
            let result = await response.json();
            alert(result.status);
        };

    // Formulaire à remplir
    return(
        <div>
            <h1>Questionnaire référence n°{slug}</h1>

            <div className="questionnaire">
                <form onSubmit={handleSubmit}>

                    <div className="question">
                        <div className="info-perso">
                            <h2> Entrer vos informations personnels :</h2>
                            <label htmlFor="text"><h2>Votre nom :</h2></label>
                            <input
                                type="text"
                                name="nom"
                                id="nom"
                                onChange={(e) => {
                                    setNom(e.target.value);
                                }}
                            />

                            <label htmlFor="text"><h2>Votre prénom :</h2></label>
                            <input
                                type="text"
                                name="prenom"
                                id="prenom"
                                onChange={(e) => {
                                    setPrenom(e.target.value);
                                }}
                                />


                            <label htmlFor="text"><h2>Votre Mail :</h2></label>
                            <input
                                type="text"
                                name="mail"
                                id="mail"
                                onChange={(e) => {
                                    setMail(e.target.value);
                                }}
                                />

                        </div>
                        <div className="QCM">
                            <h2> Formulaire de question à choix multiple (une seule réponse par question est attendue) </h2>

                            {Question.map((val) => {
                                return(

                                    <div className="question-reponse">
                                        <label><h3>Question : </h3>{val.question} </label>
                                        <h3>Réponses :</h3>
                                        <select
                                            name="reponse"
                                            id="reponse"
                                            onLoad={(e)=>{
                                                count += 1;
                                                setTrueRep(val.correct);
                                            }}
                                            onChange={(e) => {
                                                setUserRep(e.target.value);
                                                if (UserRep == TrueRep){
                                                score += 1
                                                };
                                                setTrueRep();
                                                setUserRep();
                                            }}
                                        >
                                            <option value="" selected disabled hidden> Sélectionner la bonne réponse </option>
                                            <option value={1}> {val.reponse_1} </option>
                                            <option value={2}> {val.reponse_2} </option>
                                            <option value={3}> {val.reponse_3} </option>
                                            <option value={4}> {val.reponse_4} </option>
                                        </select>
                                    </div>)
                            })}
                        </div>


                    </div>

                    <div>
                        <button type="submit"> {status} </button>
                    </div>

                </form>
            </div>

        </div>

    )
}
//export pour routing
export default Questionnaire;