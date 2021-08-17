
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import Axios from "axios";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

/*function Logout () {

    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/logout").then((response) => {
        if (response) {
            console.log(response)
        }
    });
};
*/

function Header(){

    let history = useHistory();
    const [loginStat, setLoginStat] = useState(false);

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStat(true);
            } else{
                setLoginStat(false);
            }
        });
    });



    return(
        <div className="header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <nav>
                    <img className="logo" src={logo} alt="logo"/>
                    <div className="menuANDuser">
                        <div className="menu">
                            <ul className="menu-list">
                                <NavLink exact activeClassName="current" to="/">
                                    <li >Accueil</li>
                                </NavLink>
                                <div className="submenu">
                                    <button className="submenubtn">Promeo Langue Services <i className="fa fa-caret-down"></i></button>
                                    <div className="submenu-content">
                                        <NavLink exact activeClassName="current" to="/Questionnaire">
                                            <li >Questionnaires</li>
                                        </NavLink>
                                        <NavLink exact activeClassName="current" to="/Article">
                                            <li >Articles</li>
                                        </NavLink>
                                        <NavLink exact activeClassName="current" to="/Contact">
                                            <li >Contacts</li>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="submenu">
                                    <button className="submenubtn">Espace Administration <i className="fa fa-caret-down"></i></button>
                                    <div className="submenu-content">
                                        <NavLink exact activeClassName="current" to="/ArticleMaker">
                                            <li >Article Maker</li>
                                        </NavLink>
                                        <NavLink exact activeClassName="current" to="/QuestionnaireMaker">
                                            <li >Questionnaire Maker</li>
                                        </NavLink>
                                        <NavLink exact activeClassName="current" to="/Administration">
                                            <li >Administration</li>
                                        </NavLink>
                                    </div>
                                </div>

                            </ul>
                        </div>

                        <div className="user-gestion">
                            <ul className="user-gestion-list">
                                    {loginStat === false && (
                                        <NavLink exact activeClassName="current" to="/Login">
                                            <li >Login</li>
                                        </NavLink>
                                    )}
                                    {loginStat === true && (
                                        <button onClick={() => history.push('/')} /*onClick={Logout}*/>Logout</button>
                                    )}
                                <NavLink exact activeClassName="current" to="/Register">
                                    <li >Register</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>

    )
}
export default Header;