import React, {useState, useEffect} from "react";
import Axios from "axios";



function Articles() {

        const [ArticleList, setArticleList] = useState([])

        useEffect(() => {
            Axios.get("http://localhost:3001/articleList").then((response) => {
                setArticleList(response.data);
            });
        });

return(
    <div>
        <h1>Promeo news</h1>

        {ArticleList.map((val) => {
            return(
            <div className="articles">
                <img className="article-img" src={val.img} alt="article"/>
                <h1>{val.title}</h1>
                <h3>{val.text}</h3>
            </div>)

            })}

    </div>

)
}

export default Articles;