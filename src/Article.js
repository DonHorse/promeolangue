import React, {useState} from "react";
import Axios from 'axios';

function ArticleForm(){

    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [text, setText] = useState('')

    const addArticle = () => {
        Axios.post("http://localhost:3001/api/insert", {
            title : title,
            img : img,
            text : text,
        }).then(() => {
            alert("article enregistré !")
        });
    };

    return(
        <form>
            <div className="article-form">
                <label htmlFor="title">Titre de l'article : </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={(e) => {
                    setTitle(e.target.value);
                }}/>
                <label htmlFor="text">Ajouter une image : </label>
                <input
                    type="file"
                    name="img"
                    id="img"
                    onChange={(e) => {
                    setImg(e.target.value);
                }}/>
                <label htmlFor="text">Contenu de l'article : </label>
                <input
                    type="text"
                    name="text"
                    id="text"
                    onChange={(e) => {
                    setText(e.target.value);
                }}/>

                <button onClick={addArticle}>Ajouter un article</button>
                <input type="reset"/>
            </div>
        </form>
    )
}

export default ArticleForm;