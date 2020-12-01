import React from 'react';
import '../../assets/css/Footer.css'
import contact from "../../assets/data/contact.json";

import "../../assets/css/ContactList.css";


export default function Footer(){



    return(


        <footer>
            <ul className="contact">
                {contact.list.map(i => {
                    return <li key={i.display}>
                        <a href={`${i.link}${i.value}`} target="_blank" className={i.icon}>{i.display}</a>
                    </li>
                })}
            </ul>

        </footer>


        
    );

}