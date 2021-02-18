import React, { useState} from 'react'
import './video.css';
import vid from '../../../Assets/video.mp4';
import vid2 from '../../../Assets/videoplayback.mp4';
import Carousel from 'react-elastic-carousel';

const Video = () => {

    const [videos] = useState([vid, vid2]);


    return (
        <div className = 'Video'>
            

            <Carousel>
                {videos.map((video, index) => {
                    return <video controls  key = { index } id = 'video'>
                        <source src = { video } type = 'video/mp4'/>
                    </video>
                })}
            </Carousel>

        </div>
    )
}


export default Video;