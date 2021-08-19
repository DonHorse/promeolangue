// Formulaire de contact avec envoie par mail
// imports des librairies
import React, { useState } from "react";

// fonction du formulaire de contact
const Contact = () => {
    const [status, setStatus] = useState("Envoyer !");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        // Envoie des infos vers l'API
        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    // Affichage du formulaire de Contact
    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h1>Une question ? Un avis ? Vous pouvez nous laissez un message en remplissant le formulaire ci-dessous : </h1>
            <div className="contact-input">
                <label htmlFor="name">Nom:</label>
                <input type="text" id="name" required />
            </div>
            <div className="contact-input">
                <label htmlFor="email">Votre Email:</label>
                <input type="email" id="email" required />
            </div>
            <div className="contact-input">
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};

//export pour routing
export default Contact;