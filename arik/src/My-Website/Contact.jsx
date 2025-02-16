import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('ArikAlAhsan122', 'template_vdj8w7f', form.current, {
                publicKey: 'Ar5f5lS8Z_Xgos1uU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" id="user_name" placeholder="Name" required />
            <input type="email" name="user_email" id="user_email" placeholder="Email" required />
            <textarea name="message" id="message" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactUs;
