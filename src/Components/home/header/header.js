import React from 'react';
import './header.css';
import img from "../../../Assets/reemah-image-2.jpg"

const Header = () =>{
       

    return(
        <div className = 'Header'>
            <img src ={img} alt = 'A header' id = 'header' />
            <h1 className = 'Header-text'>Know your emotions.</h1>
            <p className = 'Header-text-p'>Frailty is not an excuse to be battered.</p>
        </div>
    )
}


export default Header;
