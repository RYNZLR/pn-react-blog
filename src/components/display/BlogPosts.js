import React, {useState, useEffect} from 'react';
import { Date, Link, RichText } from 'prismic-reactjs'

import blogContent from "../../assets/data/posts/content";
import repo from "../../data/prismicApi";

import '../../assets/css/BlogPosts.css';

export default  function BlogPosts(){

    const [posts, setPosts] = useState([])

    function processPosts(prismicPosts){
  
        setPosts(prismicPosts)
        console.log(posts);
    }



    useEffect(() => {

        repo.getBlogPosts(processPosts);

    });



    return(
        <section className="posts">
            {posts.map((p) => {
                return(
                    <article key={p.uid} id={p.uid} className="blogPost">
                        <h2><a href={`#${p.uid}`}>#</a> {RichText.asText(p.data.title)}</h2>
                        <div className="content">
                            <RichText render={p.data.content}/>
                        </div>
                        <em>{p.data.date} - Lisa Dewaele</em>
                    </article>
                )
            })}
        </section>
    )


}