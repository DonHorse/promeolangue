import React, {Component, useState} from "react";
import Axios from "axios";

function Welcome (){
    const [Info, setInfo] = useState([]);
    const getInfo = () => {
        Axios.get("http://localhost:3001/api/homeInfo").then((response) => {
            setInfo(response.data);
        });
    };

    return(
        <div  className="mainBody">
            <div onLoad={getInfo} className="mainBodyTitle">
                {Info.map((val, key) =>{
                    return(
                        <div>{val.bodyTitle}</div>
                    )
                })}
            </div>
            <br/>
            <div onLoad={getInfo} className="mainBodyText">
                {Info.map((val, key) =>{
                    return(
                        <div>{val.body1}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Welcome;