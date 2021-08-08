import React, { useEffect, useState } from "react";
import Axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        }).then((response) => {
            if (response) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].firstname);
            }
        });

    }

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0].firstname);
            }
        });
    }, []);

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
                <button onClick={login}> Login </button>
            </form>
            <h1>{loginStatus}</h1>
        </div>

    )
}
export default Login;