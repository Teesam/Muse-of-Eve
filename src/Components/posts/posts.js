import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Posts = () => {


    const [post] = useState([
        {id: 1,
        title: 'Abuse',
        content: 'Lorem ipsum does fit better than every other.'
    }
    ]);

    useEffect(() => {
        
    }, [])

    

    return (
        <div>
            { post[0].content }
        </div>
    )
}


export default Posts;