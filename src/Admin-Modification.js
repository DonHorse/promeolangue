import React, {useEffect, useState} from "react";
import Axios from 'axios';
import './App.css';


function AdminForm(){

    const [bodyTitle, setBodyTitle] = useState('');
    const [body1, setBody1] = useState('');
    const [footer1, setFooter1] = useState('');
    const [footer2, setFooter2] = useState('');
    const [footer3, setFooter3] = useState('');
    const [PlaceholderInfo, setPlaceholderInfo] = useState([])

   useEffect(() => {
       Axios.get("http://localhost:3001/api/homeInfo").then((response) => {
           setPlaceholderInfo(response.data);
       });
   })


    const addAdminModif = () => {
        Axios.put("http://localhost:3001/api/homeModif", {
            bodyTitle : bodyTitle,
            body1 : body1,
            footer1 : footer1,
            footer2 : footer2,
            footer3 : footer3,

        }).then((response) => {
            alert("modifications enregistrées !");
        }).catch((error) => {
            console.log(error.message);
        });
    };

    return(
        <div className="admin-form">
            <form>
                <label htmlFor="title">Titre de page : </label>
                <input
                    type="text"
                    name="bodyTitle"
                    id="bodyTitle"
                    placeholder= {PlaceholderInfo.map((val) => { return (val.bodyTitle)})}
                    onChange={(e) => {
                        setBodyTitle(e.target.value);
                    }}/>

                <label htmlFor="text">Message d'accueil : </label>
                <textarea
                    name="body1"
                    id="body1"
                    placeholder= {PlaceholderInfo.map((val) => { return (val.body1)})}
                    onChange={(e) => {
                        setBody1(e.target.value);
                    }}
                />

                <label htmlFor="text">Pied de page gauche : </label>
                <textarea
                    name="footer1"
                    id="footer1"
                    placeholder= {PlaceholderInfo.map((val) => { return (val.footer1)})}
                    onChange={(e) => {
                        setFooter1(e.target.value);
                    }}/>

                <label htmlFor="text">Pied de page centre : </label>
                <textarea
                    name="footer2"
                    id="footer2"
                    placeholder={PlaceholderInfo.map((val) => { return (val.footer2)})}
                    onChange={(e) => {
                        setFooter2(e.target.value);
                    }}/>

                <label htmlFor="text">Pied de page droite : </label>
                <textarea
                    name="footer3"
                    id="footer3"
                    placeholder= {PlaceholderInfo.map((val) => { return (val.footer3)})}
                    onChange={(e) => {
                        setFooter3(e.target.value);
                    }}/>

                <button type="submit" onClick={addAdminModif}>Valider les modifications</button>

                <input type="reset"/>
            </form>
        </div>
    )
}

export default AdminForm;