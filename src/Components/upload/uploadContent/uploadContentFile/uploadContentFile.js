import React from 'react';
import '../../upload.css';
import './uploadContentFile.css';
import Nav from '../../../home/nav/nav'; 
import Footer from '../../../home/footer/footer';
import { Link } from 'react-router-dom';

const UploadContentFile = () => {
    const [more, setMore] = React.useState(false)

    const moreInput = <div>
        <input className = 'Filer' type = 'file' /> 
    </div>

    return(
        <div className = 'Upload-content'>
            <Nav />

            <div id = 'upload-file-div'>
                <input className  = 'Filer' type = 'file' />
                {more? moreInput : null}
                <button onClick = { () => setMore(!more)} id = 'file-more'>More Upload</button>
                <Link to = '/uploaddone' id = 'upload-content-btn'>Next</Link>
            </div>
            
            <Footer /> 

        </div>
    )
}

export default UploadContentFile;