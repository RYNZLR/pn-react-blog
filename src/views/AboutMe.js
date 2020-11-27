import React from 'react';

import displayData from '../assets/data/skills.json';
import TechList from '../components/display/TechList'

import profile from '../assets/images/profile.jpg'


export default  function AboutMe(){


    return(
        <main>
            <h1>About me</h1>
            <section className="img-split">
                <div className="mark text" dangerouslySetInnerHTML={{ __html: displayData["about-me"] }}>

                </div>
                <img src={profile} alt="Lisa Dewaele" title="Lisa Dewaele"/>
            </section>
            
            <section>
            <h2>Languages, frameworks, ...</h2>
            <TechList/>
            </section>
        </main>
    )


}