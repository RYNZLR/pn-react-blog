import React from 'react';

import {
    NavLink
  } from "react-router-dom";

import '../../assets/css/Nav.css'

export default function Navigation(){


    return(
        <nav>
           <ul>
            <li>
                <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
           </li>
           <li>
                <NavLink activeClassName='is-active' to='/blog'>Blog</NavLink>
           </li>
           <li>
           <NavLink activeClassName='is-active' to='/projects'>Projecten</NavLink>
           </li>
        </ul>
        
        </nav>

      
        
    );

}