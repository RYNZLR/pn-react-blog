import React from 'react';
import displayData from '../../assets/data/skills.json';

import '../../assets/css/TechList.css';

export default  function TechList(){


    return(

            <ul className="tech-list">
                {displayData.technologies.map(t => {
                    return <li style={{ borderColor: t.color }}>
                        {t.name}
                    </li>
                })}
            </ul>
    )


}