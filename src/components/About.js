import React, { Component } from 'react'
import '../assets/about.css';
import bgImage from "../assets/images/bg-icon.svg"
import beeldmerk from "../assets/images/Velum-pc-bg-blauw.jpg"
import secBeeldmerk from "../assets/images/bgvelum.jpg"
import ervaring from "../assets/images/touchdesigner.png"
import logo from "../assets/images/beeldmerk-groot.png"

export default class About extends Component {
    render() {
        return (
            <section class="relative">
                <div className="about container mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <div className="lg:pt-10">
                        <img src={logo} alt="logo-zwart"></img>
                    </div>
                    <div className="py-20 p-5 sm:p-0 sm:py-20 lg:pl-40 lg:py-40">
                        <h1>
                            Wat betekent mijn beeldmerk?
                        </h1>
                        <h3>
                            Het beeldmerk staat voor authenticiteit, het is de start van mijn gehele groei als designer.
                        </h3>
                        <p>Het beeldmerk is ontstaan in de tijd dat ik begon te werken met Photoshop en Cinema 4d.
                            In die periode was ik nog erg bezig met mijn andere hobby, gamen.
                            Mijn vrienden plaatsen video's op YouTube en dat groeide uit naar de behoefte aan logo's en achtergronden.
                            Daar ben ik mij vervolgens in gaan verdiepen. Hierdoor kwam ik erachter dat ik veel plezier haal uit digitale creativiteit.
                        </p>

                    </div>
                </div>

                <div className="bg-image hidden md:block overflow-hidden absolute top-0 right-0">
                    <img src={bgImage} alt="logo-zwart"></img>
                </div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 p-5 sm:p-0 lg:pt-20">
                    <div><img src={beeldmerk} alt="logo-zwart"></img></div>
                    <div><img src={secBeeldmerk} alt="logo-zwart"></img></div>
                </div>

                <section className="">
                    <div className="container mx-auto sm:py-20 grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-5 pt-20 sm:p-0 lg:py-20 lg:pr-40">
                            <h1>Waar heb ik ervaring mee?</h1>
                            <p>Ik heb mij de afgelopen jaren bezig gehouden met een aantal programma's en programmeertalen.
                                Tijdens mijn opleiding heb ik naast de creatieve vakken ook gekozen voor de minor Online Marketing. Dit met de gedachtte om mijn design in de toekomst te verbeteren met kennis van de Minor.
                                Daarnaast was het opdoen van marketing-modellen en het vakjargon een bijkomstigheid om beter samen te kunnen werken met een marketing afdeling.
                            </p>
                            <div className="pt-5 grid grid-cols-1 sm:grid-cols-2">
                                <div className="pl-4 mt-10">
                                    <h3>Adobe Photoshop</h3>
                                    <h3>Adobe Illustrator</h3>
                                    <h3>Adobe Premiere Pro</h3>
                                    <h3>Adobe Indesign</h3>
                                    <h3>Cinema 4d text modeling</h3>
                                    <h3>Touchdesigner</h3>
                                    <h3>Figma</h3>
                                    <h3>Invision</h3>
                                </div>
                                <div className="pl-4 mt-10">
                                    <h3>HTML 5</h3>
                                    <h3>(S)CSS</h3>
                                    <h3>React.js</h3>
                                    <h3>Tailwind CSS</h3>
                                    <h3>Bootstrap</h3>
                                    <h3>P5.js</h3>
                                    <h3>Arduino</h3>
                                </div>

                            </div>
                        </div>
                        <div className="example p-5 sm:p-0 py-5 lg:p-0 lg:py-20">
                            <img src={ervaring} alt="Touchdesigner UI"></img>
                        </div>
                    </div>
                </section>
            </section>





        )
    }
}
