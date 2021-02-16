import React, { useState } from 'react';
// import VideoData from '../../../videoData';
import './videoChild.css';
import vid from '../../../../Assets/video.mp4';
import vid2 from '../../../../Assets/videoplayback.mp4';

const VideoChild = ({ src, slide }) => {

    // const videos = {}

    // const {index, name, title, content} = videos;

    const [video] = useState( [
        vid, vid2
    ] );

    // const [i, setI] = useState();

   


    return(
        <div id = {`card-${video.index}`} className = 'Video-child'>
            <div className = 'vid-div'>

                


                <div className = 'video-player'>

                    {vid}
                    <video ref = { slide } controls id = 'video' >
                        <source name = 'vid' src = {src} type ="video/mp4" />
                    </video>
                    <div>
                        <h2 className = 'video-caption'>
                            {video.title}
                        </h2>
                    </div>
                    <p>{video.content}</p>

                </div>
            </div>
        </div>
    )
}

export default VideoChild;