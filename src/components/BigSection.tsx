//import React from 'react';
import { Button } from './Button';
import '../styles/BigSection.css'
import '../App.css'

function BigSection() {
    return (
        <div className='big-container'>
            <video src="/videos/Astronaut.mp4" autoPlay loop muted />
            <h1>GALAXIES AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='big-btns'>
                <Button className='btn'
                    style='btn-outlined'
                    size='btn-large'>
                    GET STARTED
                </Button>
                <Button className='btn'
                    style='btn-primary'
                    size='btn-large'>
                    WATCH DISCOVERIES! <i className='fa-solid fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default BigSection;