import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import useContentful from '../hooks/use-contentful';
import { SRLWrapper } from "simple-react-lightbox";
const query = `
query($slug: String!) {
    projectCollection(where: {slug: $slug}) {
      items {
        title
        image {
            url
        }
        projectInformation
        projectImage {
            url
        }
        projectSecImage {
            url
        }
        projectThirdImage {
            url
        }
        secondTitle
        secondInformation
        secondImage {
            url
        }
        thirdTitle
        thirdInformation
        resultImage {
            url
        }
        resultSecImage {
            url
        }
        resultThirdImage {
            url
        }
        resultFourthImage {
            url
        }
        slug
      }
    }
  }
`;

function Detail(props) {

    const slug = props.match.params.slug
    let { data } = useContentful(query, slug);

    const ref = useRef(null)

    if (!data) return (
        <div>
            <LoadingBar color='#f11946' ref={ref} />
        </div>
    )

    const info = data.projectCollection.items[0]

    return (

        <div>
            <div className="detail container mx-auto ">
                <div className="sm:pb-10">
                    <img src={info.image.url} width="33%" height="33%" alt="test"></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:py-10">
                    <div className="p-5  sm:px-5 sm:py-20 md:px-10 py-20 lg:py-20 ">
                        <h1>{info.title}</h1>
                        <p>{info.projectInformation}</p>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <div className="col-span-2"> <img src={info.projectImage.url} alt="project header"></img></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 sm:py-10">
                    <div className="flex">
                        <div > <img src={info.projectSecImage.url} alt="project header"></img></div>
                    </div>
                    <div className="p-5  sm:px-5 sm:py-20 md:px-10 pt-20 lg:py-20">
                        <h1>{info.secondTitle}</h1>
                        <p>{info.secondInformation}</p>
                    </div>
                </div>


                <div className="grid grid-cols-1 pb-20 pt-20 lg:max-h-screen">
                    <div className="px-5">
                        <h1>{info.thirdTitle}</h1>
                    </div>
                    <div className="px-5 xl:px-40">
                        <p>{info.thirdInformation}</p>
                    </div>
                </div>


                <SRLWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:pb-20 ">

                        <div className="cursor-pointer ">
                            <img src={info.projectThirdImage.url} alt="project resultaat"></img>
                        </div>
                        <div className="cursor-pointer">
                            <img src={info.secondImage.url} alt="project resultaat"></img>
                        </div>
                        <div className="cursor-pointer">
                            <img src={info.resultImage.url} alt="project resultaat"></img>
                        </div>
                        <div className="cursor-pointer">
                            <img src={info.resultSecImage.url} alt="project resultaat"></img>
                        </div>
                        <div className="cursor-pointer">
                            <img src={info.resultThirdImage.url} alt="project resultaat"></img>
                        </div>
                        <div className="cursor-pointer">
                            <img src={info.resultFourthImage.url} alt="project resultaat"></img>
                        </div>


                    </div>
                </SRLWrapper>
            </div >

        </div>

    )
}

export default Detail
