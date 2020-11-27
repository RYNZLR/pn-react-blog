import React, { useState } from 'react';
import ReactRotatingText from 'react-rotating-text'

import techs from '../../assets/data/skills.json';

export default function Technologies(){
    
    const list = techs.technologies.map(t => t.name);
    const colorList = techs.technologies.map(t => t.color);
    

    const [item, setItem] = useState(colorList.length-1)

    function changeColor(){
        if(item === colorList.length-1){
            setItem(0);
        }else{
            setItem(item+1);
        }
    }

    return(
       <section className="tech">
           <p>Let's do some</p>
           <em>
               
            <ReactRotatingText items={list} color={colorList[item]} pause={7000} emptyPause={500} onTypingStart={changeColor}/>
               
            </em>
       </section>
    );

}