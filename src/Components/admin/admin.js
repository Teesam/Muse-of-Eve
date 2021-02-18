import React from 'react';
import Nav from '../home/nav/nav';
import Footer from '../home/footer/footer';

const Admin = () => {


    console.log(Nav);


    return(
        <div className = 'Admin'>
            <Nav />

                {}
                <button>Accept</button>
                <button>Decline</button>
            <Footer />
        </div>
    )
}

export default Admin;