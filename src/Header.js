import React from "react";
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div className="header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <nav>
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
                                    <NavLink exact activeClassName="current" to="/Contact">
                                        <li >Contacts</li>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="submenu">
                                <button className="submenubtn">Espace Administration <i className="fa fa-caret-down"></i></button>
                                <div className="submenu-content">
                                    <NavLink exact activeClassName="current" to="/Article">
                                        <li >Articles</li>
                                    </NavLink>
                                    <NavLink exact activeClassName="current" to="/QuestionnaireMaker">
                                        <li >QuestionnaireMaker</li>
                                    </NavLink>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="user-gestion">
                        <ul className="user-gestion-list">
                            <NavLink exact activeClassName="current" to="/Login">
                                <li >Login</li>
                            </NavLink>
                            <NavLink exact activeClassName="current" to="/Register">
                                <li >Register</li>
                            </NavLink>
                        </ul>
                    </div>
            </nav>
        </div>

    )
}
export default Header;