// Page d'affichage d'un questionnaire'
// imports des librairies
import React from "react";
import {useParams} from "react-router-dom";
import Axios from "axios";


// fonction contenant l'affichage du questionnaire
function Questionnaire() {

    let {slug} = useParams();

    // requête à l'API GET (renvoie tous les infos du questionnaire et les questions)

    // Formulaire à remplir
    return(
        <div>
            <h1>Questionnaire référence n°{slug}</h1>


        </div>

    )
}
//export pour routing
export default Questionnaire;