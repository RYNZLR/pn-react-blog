import React, {useState, useEffect} from 'react';
import { RichText } from 'prismic-reactjs'
import repo from "../../data/prismicApi";
import '../../assets/css/ProjectsList.css';

export default  function ProjectList(){


    const [projects, setProjects] = useState([])

    function processProjects(prismicPosts){
  
        setProjects(prismicPosts)

    }



    useEffect(() => {

        repo.getBlogPosts("project-item", processProjects);

    });



    return(

            <ul className="project-list">
                {projects.map(p => {
                    return <li key={RichText.asText(p.data.title)}>
                        <a href={p.data.link.url} target="_blank">
                            <img src={p.data.sneak.url} alt={p.data.sneak.alt} title={p.data.sneak.alt}/>
                            <div>
                                <p>{RichText.asText(p.data.title)}</p>
                                <p className={`bg ${p.data["main-tech"].toLowerCase()}`}>{p.data["main-tech"]}</p>
                            </div>
                        </a>
                    </li>
                })}
            </ul>
    )


}