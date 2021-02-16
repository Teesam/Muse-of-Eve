import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () =>{
       

    return(
        <div className = 'Nav'>
            <h2 id = 'logo'>museofEVE</h2>
            <div>
                <ul>
                    <li>
                        <NavLink to = '/'>Home</NavLink>
                    </li>
                    {/* <li>
                        <Link to = '/writer'>About The Writer</Link>
                    </li> */}
                    <li>
                        <NavLink to = '/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/upload'>Upload Story</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/admin'>Admin</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/register'>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/signIn'>Sign-In</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Nav;
