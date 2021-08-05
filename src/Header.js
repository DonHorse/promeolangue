import React from "react";
import './App.css';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <nav>
            <div className="menu">
                <ul className="menu-list">
                    <NavLink exact activeClassName="current" to="/">
                        <li >Accueil</li>
                    </NavLink>

                    <NavLink exact activeClassName="current" to="/Article">
                        <li >Articles</li>
                    </NavLink>

                    <NavLink exact activeClassName="current" to="/Questionnaire">
                        <li >Questionnaires</li>
                    </NavLink>

                    <NavLink exact activeClassName="current" to="/QuestionnaireMaker">
                        <li >QuestionnaireMaker</li>
                    </NavLink>

                    <NavLink exact activeClassName="current" to="/Contact">
                        <li >Contacts</li>
                    </NavLink>
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

    )
}
export default Header;