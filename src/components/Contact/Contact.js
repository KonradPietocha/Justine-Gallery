import React from "react";
//style
import './contact.css';

function Contact() {

    return (
        <>
            <div className='contact'>
                <h2>Jeśli masz jakieś pytania, napisz do mnie:</h2>
                <a href="mailto:konkatynka@gmail.com">
                    <span>konkatynka</span>
                    <span>@</span>
                    <span>gmail</span>
                    <span>.com</span>
                </a>
            </div>

        </>
    )
}

export default Contact;
