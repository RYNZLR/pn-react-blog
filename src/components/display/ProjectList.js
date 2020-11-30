import React, {useState, useEffect} from 'react';
import { RichText } from 'prismic-reactjs'
import repo from "../../data/prismicApi";
import '../../assets/css/ProjectsList.css';

import DetailView from '../partials/DetailView';

export default  function ProjectList(){


    const [projects, setProjects] = useState([])
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    function processProjects(prismicPosts){
  
        setProjects(prismicPosts)

    }

    function showDetail(data){
        setData(data)
        setShow(true);
    }

    function hideDetail(){
        setData(null);
        setShow(false);
    }



    useEffect(() => {

        repo.getBlogPosts("project-item", processProjects);

    });



    return(

            <div>
                {show ? <DetailView data={data} /> : ""}
                <ul className="project-list">
                {projects.map(p => {
                    return <li key={RichText.asText(p.data.title)} onMouseEnter={() => {showDetail(p)}} onMouseLeave={hideDetail}>
                        <a href={p.data.link.url} target="_blank" >
                            <img src={p.data.sneak.url} alt={p.data.sneak.alt} title={p.data.sneak.alt}/>
                            <div>
                                <p>{RichText.asText(p.data.title)}</p>
                                <p className={`bg ${p.data["main-tech"].toLowerCase()}`}>{p.data["main-tech"]}</p>
                            </div>
                        </a>
                    </li>
                })}
            </ul>
            </div>
    )


}