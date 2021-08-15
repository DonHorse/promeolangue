// pied de page avec information modifiable par l'admin
import React, {useState} from "react";
import './App.css';
import Axios from "axios";

function Footer() {
    const [Info, setInfo] = useState([]);
    const getInfo = () => {
        Axios.get("http://localhost:3001/api/homeInfo").then((response) => {
            setInfo(response.data);
        });

    };
    return (
        <div key="footer" className="footer">
            {getInfo()}
            <div key="infos1" className="footer1">
                {Info.map((val, key) =>{
                    return(
                        <div>{val.footer1}</div>
                    )
                })}
            </div>
            <div key="infos2" className="footer2">
                {Info.map((val, key) =>{
                    return(
                        <div>{val.footer2}</div>
                    )
                })}
            </div>
            <div key="infos3" className="footer3">
                {Info.map((val, key) =>{
                    return(
                        <div>{val.footer3}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default Footer;