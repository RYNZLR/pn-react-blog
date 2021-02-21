import React from 'react';
import { RichText } from 'prismic-reactjs';
export default  function PostNav(props){


    const posts = props.posts;


    return(
        <div className="post-navigation">
            <strong>Beschikbare posts</strong>
            <ul>
                {posts.map(p => {
                    return <li>
                        <a href={`#${p.uid}`}>{RichText.asText(p.data.title)}</a>
                    </li>
                })}
            </ul>
        </div>

           
    )


}