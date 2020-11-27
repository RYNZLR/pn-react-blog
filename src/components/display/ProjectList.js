import React from 'react';
import displayData from '../../assets/data/projects.json';

import '../../assets/css/ProjectsList.css';

export default  function ProjectList(){




    return(

            <ul className="project-list">
                {displayData.projects.map(p => {
                    return <li key={p.name}>
                        <a href={p.link} target="_blank">
                            <img src={`./images/${p.img}`} alt={p.name} title={p.name}/>
                            <div>
                                <p>{p.name}</p>
                                <p>{p.tech}</p>
                            </div>
                        </a>
                    </li>
                })}
            </ul>
    )


}