// Affichage choix questionnaires
// imports des librairies

import React, {useEffect, useState} from "react";

import {useHistory} from "react-router-dom";
import Axios from "axios";

// fonction contenant l'affichaege des questionnaires
function QuestionnaireList(){

    const [QuestionnaireList, setQuestionnaireList] = useState([]);

    //fonction de redirection avec id du questionnaire
    let history = useHistory();
    const redirect = (id) => {
        history.push('/questionnaire/'+ id);
    }
    // GET de l'ensemble des questionnaire
    useEffect(() => {
        Axios.get("http://localhost:3001/questionnaireList").then((response) => {
            setQuestionnaireList(response.data);
        });
    });
    // Affichage choix des questionnaires et boutons de redirection
    return(
        <div>
            <h1>Questionnaires</h1>

            {QuestionnaireList.map((val) => {
                return(
                    <div className="questionnaires-list">
                        <button className="questionnaire-button" onClick={() => {redirect(val.id)}}>
                            {val.name}
                        </button>
                    </div>)

            })}

        </div>

    )
}
//export pour routing
export default QuestionnaireList;