import React, {useState, useEffect} from 'react';
import { RichText } from 'prismic-reactjs'

import Filter from '../filters/FilterBlog';

import repo from "../../data/prismicApi";

import '../../assets/css/BlogPosts.css';


export default  function BlogPosts(){

    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState([]);

    function processPosts(prismicPosts){
        setPosts(prismicPosts)
    }

    useEffect(() => {
        if(tags.length === 0){
            repo.getBlogPosts("blog-post", processPosts);
        }else{
            repo.getPostsByTags("blog-post", tags, processPosts);
        }
    
    }, [tags]);

    function filterByTags(tags){
        setTags(tags);
    }

    return(
        <div>

        <Filter filterCb={filterByTags}/>

        <section className="posts">
            {posts.map((p) => {
                return(
                    <article key={p.uid} id={p.uid} className="blogPost">
                        <h2><a href={`#${p.uid}`}>#</a> {RichText.asText(p.data.title)}</h2>
                        <div className="content">
                            <RichText render={p.data.content}/>
                        </div>
                        <ul className="tags">
                        {p.tags.map(t => {
                            return (<li key={t} className="tag">{t}</li>)
                        })}
                        </ul>
                        <em>{p.data.date} - Lisa Dewaele</em>
                        
                    </article>
                )
            })}
        </section>
        </div>
    )


}