import React from 'react';
import displayData from '../../assets/data/skills.json';

import {
    Link
  } from "react-router-dom";

import '../../assets/css/TechList.css';

export default  function TechList(){





    return(

            <ul className="tech-list">
                {displayData.technologies.map(t => {
                    const link = `/blog?search=${t.name.toLowerCase()}`
                    return <li key={t.name}>
                        <Link to={link}>
                            {t.name}
                        </Link>
                    </li>
                })}
            </ul>
    )


}