import React from 'react';
import './story1.css';
import Title from './title/title';
import Content from './content/content';
import Stamp from './stamp/stamp';

const Story1 = () => {



    return(
        <div className = 'Story-1'>
            <Title />
            <Content />
            <Stamp />
        </div>
    )
}


export default Story1;
