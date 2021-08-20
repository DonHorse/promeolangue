// Formulaire de connexion à une session
// imports des librairies
import React, { useEffect, useState } from "react";
import Axios from "axios";

// fonction contenant le formulaire de login
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    // requête à l'API POST (renvoie un user si connexion réussi)
    const login = () => {
        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].email);
            }
        });
    }
    // requête à l'API GET (info si connexion)
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus("Connecté avec : "+ response.data.user[0].email);
            }
        });
    }, []);
    // Affichage du formulaire
    return (
        <div className="login-form">
            <form>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="xyz@exemple.mail"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Password..."
                    autoComplete="on"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button onClick={login} > Login </button>
            </form>
            <div>
                <h1>{loginStatus}</h1>
            </div>

        </div>
    )
}
//export pour routing
export default Login;

// rajouté anti bot CAPTCHA