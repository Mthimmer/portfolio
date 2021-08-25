import React, { Component } from 'react'
import Hero from './Hero'
import projects from '../data/projects.json'

import '../assets/home.css';
import useContentful from '../hooks/use-contentful';
import { Link } from "react-router-dom";


// const query = `
// {
//   projectCollection {
//     items {
//       title
//       image {
//           url
//       }

//     }
//   }
// }
// `;

// function Test() {
//     let { data } = useContentful(query);

//     if (!data) return <span>loading...</span>

//     const items = data.projectCollection

//     return (
//         <div>
//             {items.map(project => (
//                 // <Link key={project.slug} to={`/detail/${project.slug}`}>
//                 <div>
//                     <img src={project.image} />
//                     <p>{project.title}</p>

//                 </div>
//                 // </Link>
//             ))}
//         </div>
//     );
// }


// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         }
//     }
//     componentDidMount() {
//         console.log(projects)
//     }
//     render() {

//         return (
//             <div className="homepage">
//                 <Hero />

                // <div className="work-grid pt-20">
                //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                //         {projects.map((project, i) => {
                //             return (
                //                 <div className="project" key={i}>
                //                     <div className="relative case">
                //                         <a href={project.path}>
                //                             <img src={project.download_url} width="33%" height="33%" alt="test"></img>
                //                             <div className="overlay">
                //                                 <h2>{project.author}</h2>
                //                                 <h4>{project.id}</h4>
                //                             </div>
                //                         </a>
                //                     </div>
                //                 </div>
                //             )
                //         })}
                //     </div>

//                     {/* <section class="relative py-20">
//                         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 ">
//                             <div className="p-5 sm:p-5 md:py-10 lg:py-20">
//                                 <h1>Digitaal designen</h1>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
//                             </div>

//                             <div class="usp p-5 sm:p-5 md:p-10 lg:p-20">
//                                 <h1>Branding</h1>
//                                 <h1>Webdesign</h1>
//                                 <h1>Programmeren</h1>
//                                 <h1>Experimenteren</h1>
//                             </div>
//                         </div>
//                         <div className="bg-image hidden md:block overflow-hidden absolute top-0 right-0 pr-60">
//                             <img src="images/bg-icon.svg" alt="logo-zwart"></img>
//                         </div>
//                     </section> */}
//                 </div>
//             </div>
//         )
//     }

// }
