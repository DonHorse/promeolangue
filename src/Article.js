// Page d'affichage de tous les articles
// imports des librairies
import React, {useState, useEffect} from "react";
import Axios from "axios";


// fonction contenant l'affichage des articles
function Articles() {

    // requête à l'API GET (renvoie tous les articles)
        const [ArticleList, setArticleList] = useState([])

        useEffect(() => {
            Axios.get("http://localhost:3001/articleList").then((response) => {
                setArticleList(response.data);
            });
        });
    // Gestion de l'affichage des articles
        return(
            <div>
                <h1>Promeo news</h1>

                {ArticleList.map((val) => {
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
                </div>)

                    })}

            </div>

        )
}
//export pour routing
export default Articles;