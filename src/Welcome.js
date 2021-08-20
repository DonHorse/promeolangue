// Message de bienvenue modifiable par l'admin
// imports des librairies
import React, {useState, useEffect} from "react";
import Axios from "axios";


// fonction contenant le message d'accueil
function Welcome (){

    const [Info, setInfo] = useState([]);
    const [Article, setArticle] = useState([]);

    // requête à l'API GET (info de la page stocké en base de données)
    useEffect(() => {
        Axios.get("http://localhost:3001/api/homeInfo").then((response) => {
            setInfo(response.data);
        });
    });

    useEffect(() => {
        Axios.get("http://localhost:3001/articleLast").then((response) => {
            setArticle(response.data);
        });
    });
    // Affichage de la fonction Welcome
    return(
        <div className="body">
            <div  className="mainBody">
                <div  className="mainBodyTitle">
                    {Info.map((val) => { return (val.bodyTitle)})}
                </div>
                <br/>
                <div  className="mainBodyText">
                    {Info.map((val) => { return (val.body1)})}
                </div>
            </div>
            <div>
                <h1>Promeo Last news</h1>
                {Article.map((val) => {
                    return(
                            <div className="articles">
                                <div>
                                    <img className="article-img" src={val.img} alt="article"/>
                                </div>
                                <div className="article-content">
                                    <div>
                                        <h2>{val.title}</h2>
                                    </div>
                                    <div>
                                        {(val.text)}
                                    </div>
                                </div>
                            </div>
                )})}
            </div>
        </div>
    )
}
//export pour routing
export default Welcome;