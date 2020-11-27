import React, { useState, useEffect} from 'react';

import techs from '../../assets/data/skills.json';

export default function Technologies(){
    
    function getRandomTech(){
        return techs.technologies[Math.floor(Math.random() * techs.technologies.length)];
    }

    const [tech, setTech] = useState(getRandomTech());

    useEffect(() => {
        setTimeout(() => {
            setTech(getRandomTech());
        }, 10000)
    })


    const techColor = tech.color;
    const techName = tech.name;



    return(
       <section className="tech">
           <p>Let's do some</p>
           <em style={{ color: `${techColor}` }}>{techName}</em>
       </section>
    );

}