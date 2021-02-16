import React, { useState, useRef } from 'react'
import './video.css';
import VideoChild from './videoChild/videoChild';
import vid from '../../../Assets/video.mp4';
import vid2 from '../../../Assets/videoplayback.mp4';

const Video = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slide = useRef();



    const videoIncrementHandler = () => {

        if(currentSlide < slide.current.children.length -1){
            let newSlide = currentSlide + 1;


        setCurrentSlide(newSlide);
        
        
        slide.current.style.transitionDuration = '.4s';
        slide.current.style.transform = `translate(-${15 * currentSlide}rem)`;   
        }else{
            return;
        }

        
    }

    const videoDecrementHandler = () => {

        if(currentSlide < slide.current.children.length -1){
            let newSlide = currentSlide - 1;


        setCurrentSlide(newSlide)
        
        
        slide.current.style.transitionDuration = '.4s';
        slide.current.style.transform = `translate(-${15 * currentSlide}rem)`;   
        }else{
            return;
        }

        
    }

    console.log(currentSlide);

    return (
        <div className = 'Video'>
            <button className = "Prev" onClick= {videoDecrementHandler}>&#10094;</button>

            <div className = 'Vida'>
                <div className = 'Video-diva'>
                    <VideoChild ref = { slide } src = {vid} />
                    <VideoChild ref = { slide } src = {vid2} />
                    <VideoChild ref = { slide } src = {vid} />
                    <VideoChild ref = { slide } src = {vid2} />
                </div>
            </div>
            


            <button className = "Next" onClick= {videoIncrementHandler}>&#10095;</button>
        </div>
    )
}


export default Video;