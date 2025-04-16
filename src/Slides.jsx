import { useState } from 'react'
import './App.css'
import sunset from './assets/Sunset.jpg'
import beach from './assets/Beach.jpg'
import sheep from './assets/Sheep.jpg'


const Slideshow = () => {
    const [isPaused, setIsPaused] = useState(false);

    const toggleAnimation = () => {
        setIsPaused(!isPaused); 
        };

    return (
        <div className='photo-container' onClick={toggleAnimation}>
            <div className='slides' style={{ animationPlayState: isPaused ? "paused" : "running" }}>
                <img src={beach} class ='photo'></img>
                <img src={sheep} class ='photo'></img>
                <img src={sunset} class ='photo'></img>
            </div>
        </div>
    )
}

export default Slideshow;