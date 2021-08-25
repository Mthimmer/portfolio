import React, { Component } from 'react'
import useContentful from '../hooks/use-contentful';

// const query = `
// query($slug: String!) {
//     detailCollection(where: {slug: $slug}) {
//       items {
//         image
//         title
//         description
//         image2
//         title2
//         description2
//         slug
//       }
//     }
//   }
// `;

// function Article(props) {
//     const slug = props.match.params.slug
//     let { data } = useContentful(query, slug);

//     if (!data) return <span>loading...</span>

//     const detail = data.detailCollection.items[0]

//     return (
//         <div>
//             the page url is /{slug}
//             <h1>{detail.title}</h1>
//         </div>
//     );
// }


export default class Detail extends Component {
    render() {
        return (
            <div className="container mx-auto p-5">
                {/* <Article /> */}
                <div>
                    <img src="images\featly-logo.gif" width="33%" height="33%" alt="test"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                    <div className="p-5 sm:p-5 md:p-10 lg:py-40">
                        <h1>Digitaal designen</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                    <div className="grid grid-cols-2 py-20">
                        <div class=""> <img src="images/task-banner.jpg" alt="project header"></img></div>
                        <div class=""> <img src="images/task-banner.jpg" alt="project header"></img></div>
                        <div class="col-span-2"> <img src="images/task-banner.jpg" alt="project header"></img></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                    <div>
                        <div class=" "> <img src="images/task-banner.jpg" alt="project header"></img></div>
                    </div>
                    <div className="p-5 sm:p-5 md:p-10 ">
                        <h1>Digitaal designen</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 pb-20 relative">
                    <div className="p-5 sm:p-5 md:p-10 lg:py-40 ml-20">
                        <h1>Digitaal designen</h1>
                    </div>
                    <div className="p-5 sm:p-5 md:p-10 lg:p-40 ml-32 mt-20 absolute">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                    <div>
                        <div class=" pb-5"> <img src="images/task-banner.jpg" alt="project header"></img></div>
                    </div>
                    <div>
                        <div class=" pb-5"> <img src="images/task-banner.jpg" alt="project header"></img></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 ">
                    <div>
                        <div class=" pb-5"> <img src="images/task-banner.jpg" alt="project header"></img></div>
                    </div>
                    <div>
                        <div class=" pb-5"> <img src="images/task-banner.jpg" alt="project header"></img></div>
                    </div>
                    <div>
                        <div class=" pb-5"> <img src="images/task-banner.jpg" alt="project header"></img></div>
                    </div>
                </div>
            </div >
        )
    }
}
