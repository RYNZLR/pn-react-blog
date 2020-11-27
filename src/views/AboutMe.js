import React from 'react';

import displayData from '../assets/data/skills.json';


export default  function AboutMe(){


    return(
        <main>
            <h1>About me</h1>
            <div className="mark text" dangerouslySetInnerHTML={{ __html: displayData["about-me"] }}>
            </div>

            <h2>Languages, frameworks, ...</h2>
            <ul>
                {displayData.technologies.map(t => {
                    return <li style={{ color: t.color }}>
                        {t.name}
                    </li>
                })}
            </ul>
        </main>
    )


}