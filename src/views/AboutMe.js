import React from 'react';

import displayData from '../assets/data/skills.json';
import TechList from '../components/display/TechList'
import SkillGraph from '../components/display/SkillsGraph'
import Timeline from "../components/display/Education";


import profile from '../assets/images/profile.jpg'


export default  function AboutMe(){


    return(
        <main>
            <h1 id="about-me">About me</h1>
            <section className="img-split">
                <div className="mark text" dangerouslySetInnerHTML={{ __html: displayData["about-me"] }}>

                </div>
                <img src={profile} alt="Lisa Dewaele" title="Lisa Dewaele"/>
            </section>

            <section>
                <h2>Career</h2>
                <Timeline/>
            </section>
            
            <section>
                <h2>Skills</h2>
                <SkillGraph/>
            </section>

            <section>
            <h2>Experience</h2>
            <TechList/>
            </section>

            <section>
            <h2>Contact</h2>
 
            </section>
        </main>
    )


}