import React, {useState} from "react";
import Axios from 'axios';

function ArticleMaker(){

    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [text, setText] = useState('')

    const addArticle = () => {
        Axios.post("http://localhost:3001/api/newArticle", {
            title : title,
            img : img,
            text : text,
        }).then(() => {
            alert("article enregistré !")
        });
    };

    return(
        <form>
            <h1>Nouvel article ! </h1>
            <div className="article-form">
                <div className="article-input">
                    <label htmlFor="title"><h1>Titre de l'article : </h1></label>
                    <textarea
                        name="title"
                        id="title"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}/>
                </div>
                <div className="article-input">
                    <label htmlFor="url"><h1>Ajouter une image (lien) : </h1></label>
                    <input
                        type="url"
                        name="img"
                        id="img"
                        onChange={(e) => {
                            setImg(e.target.value);
                        }}/>
                </div>
                <div className="article-input">
                    <label htmlFor="text"><h1>Contenu de l'article :</h1></label>
                    <textarea
                        name="text"
                        id="text"
                        onChange={(e) => {
                            setText(e.target.value);
                        }}/>
                </div>
            </div>
            <div className="admin-form">
                <button onClick={addArticle}>Ajouter un article</button>
                <input type="reset"/>
            </div>


        </form>
    )
}

export default ArticleMaker;