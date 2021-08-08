import React, {useState} from "react";
import Axios from 'axios';

function AdminForm(){

    const [bodyTitle, setBodyTitle] = useState('');
    const [body1, setBody1] = useState('');
    const [footer1, setFooter1] = useState('');
    const [footer2, setFooter2] = useState('');
    const [footer3, setFooter3] = useState('');

    const [placeholderInfo, setPlaceholderInfo] = useState([]);

    const getPlaceholderInfos = () => {
        Axios.get("http://localhost:3001/api/homeInfo").then((response) => {
            setPlaceholderInfo(response.data);
        });
    };

    const addAdminModif = () => {
        Axios.post("http://localhost:3001/api/homeModif", {
            bodyTitle : bodyTitle,
            body1 : body1,
            footer1 : footer1,
            footer2 : footer2,
            footer3 : footer3,

        }).then(() => {
            alert("modifications enregistrées !")
        });
    };

    return(
        <form>
            <div className="admin-form">
                <label htmlFor="title">Titre de page : </label>
                <input
                    type="text"
                    name="bodyTitle"
                    id="bodyTitle"
                    placeholder={bodyTitle}
                    onChange={(e) => {
                        setBodyTitle(e.target.value);
                    }}/>
                <label htmlFor="text">Message d'accueil : </label>
                <input
                    type="text"
                    name="body1"
                    id="body1"
                    onChange={(e) => {
                        setBody1(e.target.value);
                    }}/>
                <label htmlFor="text">Pied de page gauche : </label>
                <input
                    type="text"
                    name="footer1"
                    id="footer1"
                    onChange={(e) => {
                        setFooter1(e.target.value);
                    }}/>
                <label htmlFor="text">Pied de page centre : </label>
                <input
                    type="text"
                    name="footer2"
                    id="footer2"
                    onChange={(e) => {
                        setFooter2(e.target.value);
                    }}/>
                <label htmlFor="text">Pied de page droite : </label>
                <input
                    type="text"
                    name="footer3"
                    id="footer3"
                    onChange={(e) => {
                        setFooter3(e.target.value);
                    }}/>

                <button onClick={addAdminModif}>Valider les modifications</button>
                <input type="reset"/>
            </div>
        </form>
    )
}

export default AdminForm;