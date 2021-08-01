import React, {useState} from "react";
import "./App.css";

function RegisterForm() {



    return(
        <form>
            <div className="register-form">
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" id="name"/>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email"/>
                <label htmlFor="password">Password :</label>
                <input type="password" name="password" id="password"/>
                <label htmlFor="role">Vous êtes : </label>
                <select type="radio" name="role" id="role" size="3">
                    <option value="utilisateur">Utilisateur</option>
                    <option value="formateur">formateur</option>
                    <option value="administrateur">administrateur</option>
                </select>
                <input type="submit" value="Submit"/>
                <input type="reset"/>
            </div>
        </form>
    )
}



export default RegisterForm;