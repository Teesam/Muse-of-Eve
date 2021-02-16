import React from 'react';
import './stories.css';
import Story1 from './story1/story1';
import { Link } from 'react-router-dom';

const Story = () => {



    return(
        <div className = 'Story'>
            <h2 className = 'Heading'>Featured Stories</h2>
            <div>
                <Story1 />
                <Story1 />
                <Story1 />
            </div>

            <Link to = 'storyloader' id = 'story-loader'>Load more stories.</Link>
        </div>
    )
}

export default Story;