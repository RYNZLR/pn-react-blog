import React, {useState, useEffect} from 'react';
import repo from "../../data/githubApi";
import "../../assets/css/GitProjectList.css";

export default function GitHubProjects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        repo.getPublicProjects(setProjects);

    }, []);

    return(
        <ul className="git-list">
            {
                projects.map(p => {
                    return <li>
                        <a href={p.html_url} target="_blank" className="git">{p.full_name}</a>
                    </li>
                })
            }
        </ul>
    );
    

}