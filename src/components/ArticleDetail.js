import React, { Component } from 'react'
import useContentful from '../hooks/use-contentful';
import { Link } from "react-router-dom";


const query = `
{
    projectCollection {
      items {
        title
        image {
          url
        }
        slug
      }
    }
  }
`;

function Article() {
    let { data } = useContentful(query);

    if (!data) return <span>loading...</span>

    const { items } = data.projectCollection

    return (
        <div>
            {items.map(project => (
                <Link key={project.slug} to={`/detail/${project.slug}`}>
                    <div>
                        <img src={project.image.url} />
                        <p>{project.title}</p>
                        <p>{project.slug}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}