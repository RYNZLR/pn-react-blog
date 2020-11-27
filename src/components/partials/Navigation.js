import React from 'react';

import {
    NavLink
  } from "react-router-dom";

export default function Navigation(){


    return(
        <nav>
           <ul>
            <li>
            <NavLink exact={true} activeClassName='is-active' to='/'>About me</NavLink>
           </li>
           <li>
           <NavLink activeClassName='is-active' to='/blog'>Blog</NavLink>
           </li>
           <li>
           <NavLink activeClassName='is-active' to='/projects'>My Projects</NavLink>
           </li>
        </ul>
        
        </nav>

      
        
    );

}