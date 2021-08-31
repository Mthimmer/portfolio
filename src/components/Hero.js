import React, { Component } from 'react'
import '../assets/hero.css';
import hero from "../assets/images/bubbels.gif"
import bgImage from "../assets/images/bg-icon.svg"

export default class Hero extends Component {
    render() {
        return (
            <section class="relative">
                <div className="hero grid grid-cols-1 md:grid-cols-2">
                    <div className="introvideo lg:pt-10">
                        <img src={hero} alt="logo-zwart"></img>
                    </div>
                    <div className="intro pt-20 p-5 md:p-20 lg:p-40">
                        <h1>Hey! Ik ben Maik</h1>
                        <h3>"Een 24-jarige Multimedia Designer uit Boekel"</h3>
                        <p>Voordat ik aan de opleidingen SintLucas Eindhoven en Avans ‘s-Hertogenbosch was begonnen, hield ik mij voornamelijk al bezig met het maken van YouTube logo’s en achtergronden voor vrienden, connecties en zelfs buitenlandse connecties. Dit is hoe ik uiteindelijk in de designbranche terecht ben gekomen. </p>
                    </div>
                </div>
                <div className="bg-image hidden md:block overflow-hidden absolute top-0 right-0">
                    <img src={bgImage} alt="logo-zwart"></img>
                </div>
            </section>

        )
    }
}
