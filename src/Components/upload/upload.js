import React from 'react';
import './upload.css';
import Nav from '../home/nav/nav'; 
import Footer from '../home/footer/footer';
import { Link } from 'react-router-dom';

const Upload = () => {


    

    return(
        <div className = 'Upload'>
            <Nav />

            <div>
                <h1>Thanks for sharing.</h1>
                <p>You need to have an account with to share an experience.</p>
                <Link to = '/uploadcontenttext' className = 'Upload-button'>Yes, I do.</Link>
                <button className = 'Upload-button' 
                onClick = { e => alert('Send a mail to tolayiwola19@yahoo.com') }>I do not want an account.</button>
                <Link to = '/register' className = 'Upload-button'>No, I don't.</Link>
            </div>
            
            <Footer /> 

        </div>
    )
}

export default Upload;