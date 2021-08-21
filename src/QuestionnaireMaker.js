// Formulaire de création de questionnaire
// imports des librairies
import React, {useState} from "react";
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

// fonction contenant le formulaire
function QuestionnaireMaker(){

    const [FormName, setFormName] = useState('');
    const [Language, setLanguage] = useState('');
    const [CreatorName, setCreatorName] = useState('');
    const [CreatorMail, setCreatorMail] = useState('');

    // requête à l'API POST (enregistre les infos du questionnaire)
    const addForm = () => {
        Axios.post("http://localhost:3001/api/newQuestionForm", {
            formname : FormName,
            language : Language,
            creatorName : CreatorName,
            creatorMail : CreatorMail,
        }).then(() => {
            alert("Formulaire enregistré !")

        });

    };
    // Affichage du formulaire
    return(
        <div className="questionnaire">
            <h1>Questionnaire Maker</h1>
            <div className="questionnaire-info">
                <form>
                    <div className="questionnaire-input">
                            <label htmlFor="text"><h2>Nom du questionnaire </h2></label>
                            <input
                                type="text"
                                name="name"
                                id="form-name"
                                onChange={(e) => {
                                    setFormName(e.target.value);
                                }}/>
                    </div>
                    <div className="questionnaire-input">
                        <label>langue évaluée :</label>
                        <select
                            name="select-language"
                            id="language-selector"
                            onChange={(e) => {
                            setLanguage(e.target.value); }}>
                            <option value="french">Français</option>
                            <option value="english">Anglais</option>
                            <option value="spanish">Espagnol</option>
                            <option value="german">Allemand</option>
                            <option value="portuguese">Portugais</option>
                            <option value="italian">Italien</option>
                            <option value="russian">Russe</option>
                        </select>
                    </div>
                    <div className="questionnaire-input">
                        <label htmlFor="text"><h2>Votre nom complet : </h2></label>
                        <input
                            type="text"
                            name="creator-name"
                            id="creator-name"
                            onChange={(e) => {
                                setCreatorName(e.target.value);
                            }}/>
                    </div>
                    <div className="questionnaire-input">
                        <label htmlFor="text"><h2>Votre adresse email : </h2></label>
                        <input
                            type="mail"
                            name="creator-mail"
                            id="creator-mail"
                            onChange={(e) => {
                                setCreatorMail(e.target.value);
                            }}/>
                    </div>
                        <button type="submit" onClick={addForm}>Ajouter ce questionnaire </button>
                        <input type="reset"/>
                    <NavLink exact activeClassName="current" to="/QuestionnaireMaker2">
                        <button > une fois le formulaire enregistré ajouter les questions</button>
                    </NavLink>
                </form>
            </div>
        </div>
    )
}
//export pour routing
export default QuestionnaireMaker;