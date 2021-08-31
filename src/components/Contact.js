import React, { Component } from 'react'
import '../assets/contact.css';
import bgImage from "../assets/images/bg-icon.svg"
import image from "../assets/images/hero-line.gif"

export default class Contact extends Component {
    render() {
        return (
            <section class="relative">
                <div className="hero grid grid-cols-1 lg:grid-cols-2">
                    <div className="introvideo lg:pt-10">
                        <img src={image} alt="logo-zwart"></img>
                    </div>
                    <div className="alinea-contact py-20 p-5 md:p-20 lg:p-40">
                        <h1>Meer te weten komen over mij?</h1>
                        <p>Stuur vooral even een berichtje! Heb je nog vragen of feedback over een project, laat het vooral weten! Bekijk mijn LinkedIn voor meer informatie. Zou je toch liever even willen bellen, dan kan je altijd mijn nummer vragen. </p>
                        <div className="pt-10">
                            <h3><a href="https://www.linkedin.com/in/maik-i-92683580/" target="_blank ">LinkedIn</a></h3>
                            <h3><a href="mailto:maikimmers@gmail.com?subject=Ik heb een vraag!">maikimmers@gmail.com</a></h3>
                        </div>
                    </div>

                </div>
                <div className="bg-image hidden md:block overflow-hidden absolute top-0 right-0">
                    <img src={bgImage} alt="logo-zwart"></img>
                </div>
            </section>
        )
    }
}
