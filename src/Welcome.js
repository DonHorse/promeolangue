import React, {useState} from "react";
import Axios from "axios";

function Welcome (){
    const [Info, setInfo] = useState([]);
    const getInfo = () => {
        Axios.get("http://localhost:3001/api/homeInfo").then((response) => {
            setInfo(response.data);
        });
    };

    return(
        <body>
            <div  className="mainBody">
                {getInfo()}
                <div key="bodytitle" className="mainBodyTitle">

                    {Info.map((val, key) =>{
                        return(
                            <div>{val.bodyTitle}</div>
                        )
                    })}
                </div>
                <br/>
                <div key="bodytext" className="mainBodyText">
                    <p>
                    {Info.map((val, key) =>{
                        return(
                        <div>{val.body1}</div>
                        )
                    })}
                    </p>

                </div>
            </div>
            <div className="Carroussel">

            </div>
        </body>
    )
}

export default Welcome;