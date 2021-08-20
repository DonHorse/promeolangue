import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

//export pour routing
export default function Registration() {
    const [firstnameReg, setFirstnameReg] = useState("");
    const [lastnameReg, setLastnameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [roleReg, setRoleReg] = useState("utilisateur");
    const [passwordReg, setPasswordReg] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            firstname: firstnameReg,
            lastname : lastnameReg,
            email: emailReg,
            password: passwordReg,
            role : roleReg,
        }).then((response) => {
            console.log(response);
        });
    };



    return (

            <div className="registration-form">
                <form>
                    <h1>Registration</h1>
                    <label>First Name</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setFirstnameReg(e.target.value);
                        }}
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setLastnameReg(e.target.value);
                        }}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        onChange={(e) => {
                            setEmailReg(e.target.value);
                        }}
                    />

                    <label>Type d'utilisateur :</label>
                    <select onChange={(e) => {
                            setRoleReg(e.target.value); }}>
                        <option value="utilisateur">Utilisateur</option>
                        <option value="formateur">Formateur</option>
                    </select>

                    <label>Password</label>
                    <input
                        type="password"
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                    />
                    <button  onClick={register}> Register </button>
                </form>
            </div>


    );
}



// rajouté anti bot CAPTCHA
