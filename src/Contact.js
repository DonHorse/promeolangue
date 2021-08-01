import React from "react";
import {useHistory} from "react-router-dom";


function Contact(){

    let history = useHistory();

    return(
        <div>
            <h1>Contacts</h1>
            <button onClick={() => history.push('/')}>Retour à la page d'accueil</button>


        </div>

    )
}

export default Contact;