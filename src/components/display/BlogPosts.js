import React from 'react';

import blogContent from "../../assets/data/posts/content";

import '../../assets/css/BlogPosts.css';

export default  function BlogPosts(){


    return(
        <section className="posts">
            {blogContent.getBlogPosts().map((p) => {
                return(
                    <article id={p.link} className="blogPost">
                        <h2><a href={`#${p.link}`}>#</a> {p.title}</h2>
                        <div className="content" dangerouslySetInnerHTML={{ __html: p.text }}></div>
                        <em>{p.date} - Lisa Dewaele</em>
                    </article>
                )
            })}
        </section>
    )


}