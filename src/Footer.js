// pied de page avec information modifiable par l'admin

// imports des librairies
import React, {useState, useEffect} from "react";
import './App.css';
import Axios from "axios";

// fonction du pied de page

function Footer() {
    const [Info, setInfo] = useState([]);

    // requête à l'API GET (info de la page stocké en base de données)
    useEffect(() => {
        Axios.get("http://localhost:3001/api/homeInfo").then((response) => {
            setInfo(response.data);
        });
    });

    // Affichage de la fonction Footer
    return (
        <div className="footer">
            <div className="footer1">
                {Info.map((val) => { return (val.footer1)})}
            </div>
            <div className="footer2">
                {Info.map((val) => { return (val.footer2)})}
            </div>
            <div className="footer3">
                {Info.map((val) => { return (val.footer3)})}
            </div>
        </div>
    );
}

//export pour routing

export default Footer;