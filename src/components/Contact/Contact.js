import React from "react";
//style
import './contact.css';

function Contact() {

    return (
        <>
            <div className='contact'>
                <h1>Jeśli masz jakieś pytania, napisz:</h1>
                <form>
                    <label>Twój e-mail:<br />
                        <input type="email" />
                    </label><br />
                    <label>Treść:<br />
                        <textarea name="comment" id="" cols="30" rows="10" />
                    </label><br />
                    <input className='submit' type="submit" />
                </form>
            </div>

        </>
    )
}

export default Contact;
