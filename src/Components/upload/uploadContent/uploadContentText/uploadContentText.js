import React from 'react';
import '../../upload.css';
import '../uploadContent.css';
import './uploadContentText.css';
import Nav from '../../../home/nav/nav'; 
import Footer from '../../../home/footer/footer';
import { Link } from 'react-router-dom';

const UploadContentText = () => {


    

    return(
        <div className = 'Upload-content'>
            <Nav />

            <div id = 'upload-content-div'>
                <textarea cols = '40' rows = '10' placeholder = 'Type here' id = 'upload-area' />
                <Link to = '/uploadcontentfile' id = 'upload-content-btn'>Next</Link>
            </div>
            
            <Footer /> 

        </div>
    )
}

export default UploadContentText;