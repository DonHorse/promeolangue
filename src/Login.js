import React from "react";

function LoginForm() {
    return(
        <form>
            <div className="login-form">
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" id="name"/>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email"/>
                <label htmlFor="password">Password :</label>
                <input type="password" name="password" id="password"/>
            </div>
        </form>
    )
}



export default LoginForm;