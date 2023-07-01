import React from "react";
import './AboutUs.css';
import Card from './Cards';
import mejis_image from '../../assets/mejis.jpg'; 
import rai_image from '../../assets/rai.jpeg';


export default function AboutUs() {
    return (
        <>

        <nav className='nav-home'>
            <a href='/home'> HOME </a>
            <a href='/instructions'> INSTRUCTIONS</a>
        </nav>
        <div>
            <h2>About Us</h2>
            <p>We are two friends who met in an online project way back on the first year of coronavirus. Time passed, and we 
                randomly came accross each other in a football game. Then, randomly again we met after the probability course final exam.
                Since then, we keep contact and we are now working together in this project. We also worked together in the 
                <a class="project-link" href="https://proyecto-software-l5i6.onrender.com/"> software</a> project (IIC-2143), check it out if you're interested :). 
             </p>
        </div>
        <div class="container"> 
            <div>
            <Card
                name="Raimundo Fuchslocher"
                imageSrc={rai_image}
                altText="FudiLove"
                description="Native from Osorno, he came to the big city because he wants a place in the big leagues.
                            He has one weakness, and it's name is League of Legends."
            />
            </div>

            <div>
            <Card
                name="Ignacio Mejías"
                imageSrc={mejis_image}
                altText="MejisKingdom"
                description="Native from Santiago, he is here to eat the scene. His actual weakness is 
                            called Rocket League."
            />
            </div>
        </div>
        </>
    )
}
