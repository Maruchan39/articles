import React from 'react'

const Article = ({title, content, image}) => {
    return (
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    )
}

export default Article
