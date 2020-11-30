import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs'

export default function DetailView(props){

    const detail = useState(props.data);
    const data = detail[0];

    return(


        <div className="left info">
            <h3>{RichText.asText(data.data.title)}</h3>
            <RichText render={data.data.desc}/>
            {console.log(data)}
            <h4>Technologies</h4>
            <ul className="tags">
               {data.tags.map((t) => {
                   return <li className={`tag border ${t.toLowerCase()}`}   key={t}>{ t }</li>
               })}
            </ul>
        </div>


        
    );

}