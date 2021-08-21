import React from "react";
import {useParams} from "react-router-dom";

function Questionnaire(){

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