import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Hero from './Hero'

import '../assets/home.css';
import useContentful from '../hooks/use-contentful';
import { Link } from "react-router-dom";
import bgImage from "../assets/images/bg-icon3.svg"


const query = `
{
    projectCollection {
      items {
        title
        image {
            url
        }
        description
        slug
      }
    }
  }
`;

function Home() {
    let { data } = useContentful(query);
    const [progress, setProgress] = useState(0);


    if (!data) return (
        <div>
            <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
                onLoaderFinished={() => setProgress(0)} />
        </div>
    )

    const { items } = data.projectCollection
    return (

        <div>
            <Hero />

            <div className="work-grid">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-20 sm:pt-0">
                    {items.map(project => (
                        <div className="project">
                            <div className="relative case">
                                <Link key={project.slug} to={`/project/${project.slug}`}>
                                    <img src={project.image.url} alt={project.title}></img>
                                    <div className="overlay">
                                        <h2>{project.title}</h2>
                                        <h4>{project.description}</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>



                <section class="relative py-20">
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 ">
                        <div className="p-5 sm:p-5 md:py-10 lg:py-20">
                            <h1>Digitaal designen</h1>
                            <p>Mijn interesses liggen voornamelijk op het gebied van digital design, UX/UI & Front-end.
                                Zo ben ik graag naast design bezig met coderen en heb ik mij verdiept in React.js om mijn portfolio op te bouwen.
                                Ik vind het erg interessant om met verschillende experimenten bezig te zijn en mij verder te ontwikkelen. Zo heb ik nog de ambitie om meer te leren van UX/UI en programmeren. </p>
                        </div>

                        <div class="usp p-5 sm:p-5 md:p-10 lg:p-20">
                            <h1>Branding</h1>
                            <h1>Webdesign</h1>
                            <h1>Programmeren</h1>
                            <h1>Experimenteren</h1>
                        </div>
                    </div>
                    <div className="bg-image hidden md:block overflow-hidden absolute top-0 right-0 mr-40 pr-60">
                        <img src={bgImage} alt="logo-zwart"></img>
                    </div>
                </section>
            </div>
        </div>


    )
}

export default Home
