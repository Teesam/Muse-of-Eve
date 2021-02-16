import React, { useState } from 'react';
import '../../upload.css';
import './uploadDone.css';
import Nav from '../../../home/nav/nav'; 
import Footer from '../../../home/footer/footer';
import { Link } from 'react-router-dom';

const UploadDone = () => {

    const [user] = useState({
        name: 'Tunde'
    })



    return(
        <div className = 'Upload-done'>
            <Nav />

            <div id = 'upload-done-div'>
                <h1 id = 'appreciation'>Thanks for sharing {user.name}</h1>
                <Link to = '/' id = 'upload-done-btn'>Exit</Link>
            </div>
            
            <Footer /> 

        </div>
    )
}

export default UploadDone;