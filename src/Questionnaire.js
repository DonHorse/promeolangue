// Formulaire de connexion à une session
// imports des librairies

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Axios from "axios";

// fonction contenant le formulaire de login
function Questionnaire(){
    const [Question, setQuestion] = useState("");
    const [Reponse1, setReponse1] = useState("");
    const [Reponse2, setReponse2] = useState("");
    const [Reponse3, setReponse3] = useState("");
    const [Reponse4, setReponse4] = useState("");
    const [Correction, setCorrection] = useState();

    const [Qid , setQid] = useState();

    // requête à l'API  (GET l'id du dernier formulaire, POST les questions)
    useEffect(() => {
        Axios.get("http://localhost:3001/api/getLastForm").then((response) => {
            setQid(response.data[0].id);
        });
    });

    const addQuestion = () =>{
        Axios.post("http://localhost:3001/api/newQuestion", {
            question : Question,
            reponse1 : Reponse1,
            reponse2 : Reponse2,
            reponse3 : Reponse3,
            reponse4 : Reponse4,
            correction : Correction,
            Qid : Qid,
        }).then(() => {
            alert("Question enregistré !")
        });
    };

    // Affichage du formulaire
    let {slug} = useParams()

    return(
        <div>
            <h1>Questionnaire {slug}</h1>
            <p>Work in progress.. </p>
        </div>

    )
}
//export pour routing
export default Questionnaire;