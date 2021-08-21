// Formulaire de création des questions
// imports des librairies
import React, {useState, useEffect} from "react";
import Axios from "axios";

// fonction contenant la création de question
const QuestionReponse = () => {

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
    return(
        <div className="Question-reponse">
            <form>

                <div className="question">
                    <label htmlFor="text"><h2>Question : </h2></label>
                    <input
                        type="text"
                        name="question"
                        id="question"
                        onChange={(e) => {
                            setQuestion(e.target.value);
                        }}/>
                </div>
                <div className="reponse">
                    <label htmlFor="text"><h2>Reponse 1 : </h2></label>
                    <input
                        type="text"
                        name="reponse1"
                        id="reponse1"
                        onChange={(e) => {
                            setReponse1(e.target.value);
                        }}/>
                </div>
                <div className="reponse">
                    <label htmlFor="text"><h2>Reponse 2 : </h2></label>
                    <input
                        type="text"
                        name="reponse2"
                        id="reponse2"
                        onChange={(e) => {
                            setReponse2(e.target.value);
                        }}/>
                </div>
                <div className="reponse">
                    <label htmlFor="text"><h2>Reponse 3 : </h2></label>
                    <input
                        type="text"
                        name="reponse3"
                        id="reponse3"
                        onChange={(e) => {
                            setReponse3(e.target.value);
                        }}/>
                </div>
                <div className="reponse">
                    <label htmlFor="text"><h2>Reponse 4 : </h2></label>
                    <input
                        type="text"
                        name="reponse4"
                        id="reponse4"
                        onChange={(e) => {
                            setReponse4(e.target.value);
                        }}/>
                </div>
                <div className="correction">
                    <label>numéro de la bonne réponse : </label>
                    <select
                        name="bonne-reponse"
                        id="bonne-reponse"
                        onChange={(e) => {
                            setCorrection(e.target.value); }}>
                        <option value={1}> 1 </option>
                        <option value={2}> 2 </option>
                        <option value={3}> 3 </option>
                        <option value={4}> 4 </option>
                    </select>
                </div>
                <div>
                    <button type="submit" onClick={addQuestion}>Valider la question !</button>
                </div>

            </form>
        </div>

    )
}
//export pour routing
export default QuestionReponse;