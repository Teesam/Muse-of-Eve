import React from 'react';
import './contact.css';
import Nav from '../home/nav/nav';
import Footer from '../home/footer/footer';

const Contact = () => {


    return(

        <div className = 'Contact'>
            <Nav />

            <h2 id = 'support-head'>Support</h2>

            <form id = 'form'>
                <div className = 'form-div'>
                    <label for = 'e-mail'>E-mail</label>
                    <input className = 'Contact-input' name = 'e-mail' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <textarea type = 'text' placeholder = 'Type here...' cols = '10' rows = '10'></textarea>
                </div>
                <div className = 'form-div'>
                    <button id = 'contact-btn'>Submit</button>
                </div>

            </form>

            <p id = 'bye-note'>Thanks for trusting us.</p>

            <Footer />
        </div>
    )
}

export default Contact;